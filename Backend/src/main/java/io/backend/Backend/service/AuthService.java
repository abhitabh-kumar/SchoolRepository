package io.backend.Backend.service;

import io.backend.Backend.dto.AuthResponseDto;
import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.dto.TokenType;
import io.backend.Backend.repo.UserInfoRepo;
import io.backend.Backend.utils.JwtTokenGenerator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final UserInfoRepo userInfoRepo;

    private final JwtTokenGenerator jwtTokenGenerator;

    public ResponseDetails getJwtTokensAfterAuthentication(Authentication authentication) {
        try
        {
            var userInfoEntity = userInfoRepo.findByUserName(authentication.getName())
                    .orElseThrow(()->{
                        log.error("[AuthService:userSignInAuth] User :{} not found",authentication.getName());
                        return new ResponseStatusException(HttpStatus.NOT_FOUND,"USER NOT FOUND ");});


            String accessToken = jwtTokenGenerator.generateAccessToken(authentication);

            log.info("[AuthService:userSignInAuth] Access token for user:{}, has been generated",userInfoEntity.getUserName());
            AuthResponseDto responseData = AuthResponseDto.builder()
                    .accessToken(accessToken)
                    .accessTokenExpiry(15 * 60)
                    .userName(userInfoEntity.getUserName())
                    .tokenType(TokenType.Bearer)
                    .build();

            ResponseDetails responseDetails = new ResponseDetails(
                    Integer.toString(HttpStatus.OK.value()),
                    "Sign In Successfully",
                    responseData
            );
            return responseDetails;

        }catch (Exception e){
            log.error("[AuthService:userSignInAuth]Exception while authenticating the user due to :"+e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,"Please Try Again");
        }
    }
}
