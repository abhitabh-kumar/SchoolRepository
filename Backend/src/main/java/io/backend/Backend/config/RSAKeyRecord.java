package io.backend.Backend.config;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

/**
 * @author Abhitabh Kumar Pandey
 */
@ConfigurationProperties(value = "jwt")
public record RSAKeyRecord(RSAPublicKey rsaPublicKey, RSAPrivateKey rsaPrivateKey){

}