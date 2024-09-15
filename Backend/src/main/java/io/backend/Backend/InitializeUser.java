//package io.backend.Backend;
//
//import io.backend.Backend.entity.AddressEntity;
//import io.backend.Backend.entity.AdminEntity;
//import io.backend.Backend.entity.StudentEntity;
//import io.backend.Backend.entity.UserInfoEntity;
//import io.backend.Backend.repo.UserInfoRepo;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import java.util.List;
//
//@RequiredArgsConstructor
//@Component
//@Slf4j
//public class InitializeUser implements CommandLineRunner {
//    private final UserInfoRepo userInfoRepo;
//    private final PasswordEncoder passwordEncoder;
//    @Override
//    public void run(String... args) throws Exception {
//        StudentEntity student =new StudentEntity();
//        student.setName("Abhitabh");
//        student.setUserName("Pandey@123");
//        student.setRollNo("2409001");
//        student.setPassword(passwordEncoder.encode("password"));
//        student.setEmailId("abhi@gmail.com");
//        student.setRoles("STUDENT");
//        student.setAge(20);
//        student.setGrade(9);
//        student.setAddress(new AddressEntity().builder()
//                .state("bihar")
//                .zipCode("802301")
//                .city("arrah").build());
//        student.setFatherName("devendra Nath pandey");
//        student.setMobileNumber("8092435285");
//
//        AdminEntity admin = new AdminEntity();
//        admin.setName("Ajitabh");
//        admin.setUserName("Admin@123");
//        admin.setPassword(passwordEncoder.encode("admin"));
//        admin.setRoles("ADMIN");
//        admin.setEmailId("admin@gmail.com");
//
//        userInfoRepo.saveAll(List.of(student,admin));
//    }
//
//}
