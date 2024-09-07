package io.backend.Backend.controller;

import io.backend.Backend.model.TeacherEntity;
import io.backend.Backend.service.TeacherServiceImpl;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/teacher")
public class TeacherEntityController {

    @Autowired
    private TeacherServiceImpl teacherserviceimpl;
    private static final Logger logger = LoggerFactory.getLogger(TeacherEntityController.class);

    @PostMapping("/create")
    public ResponseEntity<TeacherEntity> createStudentEntity(@RequestBody TeacherEntity teacherentity)
    {
        System.out.println("Line no. 29");
        System.out.println(teacherentity);
        TeacherEntity theteacherentity = teacherserviceimpl.createTeacher(teacherentity);
        return new ResponseEntity<>(theteacherentity, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeacherEntity> getStudentEntity(@PathVariable("id") Long id)
    {
        try {
            TeacherEntity theteacherentity = teacherserviceimpl.getTeacherEntityById(id);
            if (theteacherentity != null) {
                return new ResponseEntity<>(theteacherentity, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception e) {
            logger.error("Error occurred while fetching teacher entity: ", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/all")
    public ResponseEntity<List<TeacherEntity>> getallTeacherEntity()
    {
        try {
            List<TeacherEntity> teacherentities = teacherserviceimpl.getallteacher();

            if (!teacherentities.isEmpty()) {
                return new ResponseEntity<>(teacherentities, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            logger.error("Error occurred while fetching teacher entities: ", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/email")
    public ResponseEntity<TeacherEntity> getallTeacherEntityByEmail(@RequestParam String email)
    {
        try {
            TeacherEntity teacherentities = teacherserviceimpl.getTeacherEntityByEmail(email);
            return new ResponseEntity<>(teacherentities, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error occurred while fetching teacher entities: ", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/{id}")
    public void deleteTeacherById(@PathVariable("id") Long id){
        TeacherEntity theTeacherEntity = teacherserviceimpl.getTeacherEntityById(id);
        if(theTeacherEntity!=null) teacherserviceimpl.deleteteacherEntity(id);
    }
}
