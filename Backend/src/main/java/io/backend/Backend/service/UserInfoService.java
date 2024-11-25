package io.backend.Backend.service;


import io.backend.Backend.dto.ResponseDetails;
import io.backend.Backend.entity.UserInfoEntity;
import io.backend.Backend.repo.UserInfoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserInfoService {

    @Autowired
    private UserInfoRepo userRepository;

    public ResponseDetails saveUser(String username, byte[] profilePic) {
        UserInfoEntity user = new UserInfoEntity();
        user.setUserName(username);
        user.setProfilePic(profilePic);
        UserInfoEntity updatedUser = userRepository.findByUserName(username).get();
        updatedUser.setProfilePic(profilePic);
        userRepository.save(updatedUser);
        return ResponseDetails.builder()
                .code(Integer.toString(HttpStatus.OK.value()))
                .message("Picture Update Successfully")
                .data(updatedUser).build();
    }
}

