//package io.backend.Backend;
//
//import io.backend.Backend.entity.*;
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
//        student.setUserName("Pandey123");
//        student.setRollNo("2409001");
//        student.setPassword(passwordEncoder.encode("password12"));
//        student.setEmailId("pandeyjeearrah9718@gmail.com");
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
//        admin.setUserName("Admin123");
//        admin.setPassword(passwordEncoder.encode("admin21"));
//        admin.setRoles("ADMIN");
//        admin.setEmailId("admin@gmail.com");
//
//
//        TeacherEntity teacher = new TeacherEntity();
//        teacher.setUserName("Kumar");
//        teacher.setName("Kumar Ranjan Pandey");
//        teacher.setDescription("Good Teacher !!!");
//        teacher.setPassword(passwordEncoder.encode("Ranjan123"));
//        teacher.setRoles("TEACHER");
//        teacher.setAge(40);
//        teacher.setEmailId("kranjanpandey8294@gmail.com");
//        teacher.setMobileNumber("82946684545");
//
//        userInfoRepo.saveAll(List.of(student,admin,teacher));
//    }
//
//}
