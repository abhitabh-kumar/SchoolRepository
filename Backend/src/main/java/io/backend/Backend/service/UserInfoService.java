package io.backend.Backend.service;


import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.UserInfoEntity;
import io.backend.Backend.exception.NotFoundException;
import io.backend.Backend.repo.UserInfoRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
public class UserInfoService {

    @Autowired
    private UserInfoRepo userRepository;

    public ResponseDetails saveUser(String username, byte[] profilePic) {
        log.info("Entered into saveUser Method in UserInfoServiced");
        UserInfoEntity user = new UserInfoEntity();
        user.setUserName(username);
        user.setProfilePic(profilePic);
        Optional<UserInfoEntity> updatedUser = userRepository.findByUserName(username);
        if(updatedUser.isPresent()){
            UserInfoEntity fetchUser = updatedUser.get();
            fetchUser.setProfilePic(profilePic);
            userRepository.save(fetchUser);
            return ResponseDetails.builder()
                    .code(Integer.toString(HttpStatus.OK.value()))
                    .message("Picture Update Successfully")
                    .data(fetchUser).build();

        }
        log.error("User Not Found");
        throw new NotFoundException("User Not Found");
    }
}

