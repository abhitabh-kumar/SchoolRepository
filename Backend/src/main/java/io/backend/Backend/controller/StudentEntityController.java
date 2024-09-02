package io.backend.Backend.controller;

import io.backend.Backend.model.StudentEntity;
import io.backend.Backend.service.StudentServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/student")
public class StudentEntityController {

    @Autowired
    private StudentServiceImp studentserviceimp;
    private static final Logger logger = LoggerFactory.getLogger(StudentEntityController.class);

    @PostMapping("/create")
    public ResponseEntity<StudentEntity> createStudentEntity(@RequestBody StudentEntity studententity)
    {
        StudentEntity thestudententity = studentserviceimp.createStudent(studententity);
        return new ResponseEntity<>(thestudententity, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentEntity> getStudentEntity(@PathVariable("id") Long id)
    {
        try {
            StudentEntity thestudententity = studentserviceimp.getStudentEntityById(id);
            if (thestudententity != null) {
                return new ResponseEntity<>(thestudententity, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception e) {
            logger.error("Error occurred while fetching student entity: ", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/all")
    public ResponseEntity<List<StudentEntity>> getallStudentEntity()
    {
    try {
        List<StudentEntity> studentEntities = studentserviceimp.getallstudent();

        if (!studentEntities.isEmpty()) {
            return new ResponseEntity<>(studentEntities, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    } catch (Exception e) {
        logger.error("Error occurred while fetching student entities: ", e);
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
     @DeleteMapping("/{id}")
     public void deleteStudentEntity(@PathVariable("id") Long id)
     {
         StudentEntity thestudententity = studentserviceimp.getStudentEntityById(id);
         if(thestudententity!=null) studentserviceimp.deleteStudentEntity(id);
     }

}
