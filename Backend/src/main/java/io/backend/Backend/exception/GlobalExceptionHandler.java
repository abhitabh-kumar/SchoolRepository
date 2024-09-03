package io.backend.Backend.exception;

import io.backend.Backend.dto.ResponseDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.naming.AuthenticationException;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseDetails handleNotFoundException(NotFoundException e){
        ResponseDetails responseDetails = new ResponseDetails(Integer.toString(HttpStatus.NOT_FOUND.value()),
                e.getMessage(),null);
        log.error("Not Found Exception");
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
}
