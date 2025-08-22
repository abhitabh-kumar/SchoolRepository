package io.backend.Backend.exception;

import io.backend.Backend.dto.ResponseDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.naming.AuthenticationException;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.nio.file.AccessDeniedException;
import java.sql.SQLIntegrityConstraintViolationException;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(BadRquestException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseDetails handleBadRequestException(BadRquestException e){
        ResponseDetails responseDetails = new ResponseDetails(
                Integer.toString(HttpStatus.BAD_REQUEST.value()),
                e.getMessage(),
                null
        );
        log.error("Bad Request exception occurred");
        return responseDetails;
    }

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseDetails handleNotFoundException(NotFoundException e){
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.NOT_FOUND.value()),
                e.getMessage(),null);
        log.error("Not Found Exception : {}",e.getMessage());
        return responseDetails;
    }

    @ExceptionHandler(AuthenticationException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ResponseDetails handleAuthenticationException(AuthenticationException e){
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.FORBIDDEN.value()),
                e.getMessage(),null);
        log.error("Authentication Failed");
        return responseDetails;
    }

    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ResponseDetails handleAccessDeniedException(AccessDeniedException e) {
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.FORBIDDEN.value()),
                "You do not have permission to access this resource" + e.getMessage(),null);
        log.error("You do not have permission to access this resource");
        return responseDetails;
    }

    @ExceptionHandler(BadCredentialsException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseDetails handleBadCredentialsException(BadCredentialsException e){
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.UNAUTHORIZED.value()),
                e.getMessage(),null);
        log.error("Bad Credentials exception occurred");
        return responseDetails;
    }

    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseDetails handleDuplicateEntryException(SQLIntegrityConstraintViolationException e) {
        // Log the error if needed
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.CONFLICT.value()),
                e.getMessage(),null);
        log.error("Bad Credentials exception occurred");
        return responseDetails;
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseDetails usernameNotFoundException(UsernameNotFoundException e) {
        // Log the error if needed
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.UNAUTHORIZED.value()),
                e.getMessage(),null);
        log.error("Username or password is incorrect");
        return responseDetails;
    }

    @ExceptionHandler(Exception.class)
    public ResponseDetails handleException(Exception e){
        log.info("Entered into handleException method in GlobalExceptionHandler");
        HttpStatus status;
        try{
            Class<? extends  Exception> c = e.getClass();
            Constructor<? extends Exception> constructor = c.getConstructor(String.class);
            Object invoker = constructor.newInstance(e.getMessage());
            Class<?>[] arguments = new Class[]{};
            Method method = c.getMethod("getStatusCode",arguments);
            status = (HttpStatus) method.invoke(invoker,(Object) arguments);
        }catch (Exception exception){
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        ResponseDetails responseDetails = ResponseDetails.builder()
                .message(e.getMessage())
                .code(String.valueOf(status.value()))
                .build();
        log.error("error in exception handler :{}",e.getMessage());
        return responseDetails;
    }

}
