package io.backend.Backend.exception;

public class BadRquestException extends RuntimeException{
    public BadRquestException(){ super(); }

    @Override
    public String getMessage() {
        return super.getMessage();
    }

    @Override
    public void setStackTrace(StackTraceElement[] stackTrace) {
        super.setStackTrace(stackTrace);
    }

    public BadRquestException(String message) {
        super(message);
    }
}
