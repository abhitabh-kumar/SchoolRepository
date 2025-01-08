//package io.backend.Backend.utils;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//
//import jakarta.annotation.PostConstruct;
//import org.springframework.context.annotation.Primary;
//import org.springframework.stereotype.Component;
//
//import javax.crypto.Cipher;
//import java.io.BufferedReader;
//import java.io.InputStreamReader;
//import java.security.*;
//import java.security.spec.PKCS8EncodedKeySpec;
//import java.security.spec.X509EncodedKeySpec;
//import java.util.Base64;
//
//@Primary
//@Component
//@RequiredArgsConstructor
//@ConfigurationProperties(prefix = "jwt")
//public class RSAEncDecUtils {
//
//    private String rsaPublicKey;
//    private String rsaPrivateKey;
//
//    private PublicKey publicKey;
//    private PrivateKey privateKey;
//
//    @PostConstruct
//    public void initKeys() throws Exception {
//        this.publicKey = loadPublicKey(rsaPublicKey);
//        this.privateKey = loadPrivateKey(rsaPrivateKey);
//    }
//
//    private PublicKey loadPublicKey(String publicKeyPath) throws Exception {
//        String publicKeyContent = readKeyFromFile(publicKeyPath);
//        publicKeyContent = publicKeyContent
//                .replace("-----BEGIN PUBLIC KEY-----", "")
//                .replace("-----END PUBLIC KEY-----", "")
//                .replaceAll("\\s+", "");
//
//        byte[] keyBytes = Base64.getDecoder().decode(publicKeyContent);
//        X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);
//        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
//        return keyFactory.generatePublic(spec);
//    }
//
//    private PrivateKey loadPrivateKey(String privateKeyPath) throws Exception {
//        String privateKeyContent = readKeyFromFile(privateKeyPath);
//        privateKeyContent = privateKeyContent
//                .replace("-----BEGIN PRIVATE KEY-----", "")
//                .replace("-----END PRIVATE KEY-----", "")
//                .replaceAll("\\s+", "");
//
//        byte[] keyBytes = Base64.getDecoder().decode(privateKeyContent);
//        PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(keyBytes);
//        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
//        return keyFactory.generatePrivate(spec);
//    }
//
//    private String readKeyFromFile(String path) throws Exception {
//        try (BufferedReader reader = new BufferedReader(new InputStreamReader(
//                getClass().getResourceAsStream(path.replace("classpath:", ""))
//        ))) {
//            StringBuilder content = new StringBuilder();
//            String line;
//            while ((line = reader.readLine()) != null) {
//                content.append(line).append("\n");
//            }
//            return content.toString();
//        }
//    }
//
//    public String encrypt(String data) throws Exception {
//        Cipher cipher = Cipher.getInstance("RSA");
//        cipher.init(Cipher.ENCRYPT_MODE, publicKey);
//        byte[] encryptedValue = cipher.doFinal(data.getBytes());
//        return Base64.getEncoder().encodeToString(encryptedValue);
//    }
//
//    public String decrypt(String encryptedData) throws Exception {
//        Cipher cipher = Cipher.getInstance("RSA");
//        cipher.init(Cipher.DECRYPT_MODE, privateKey);
//        byte[] decryptedValue = cipher.doFinal(Base64.getDecoder().decode(encryptedData));
//        return new String(decryptedValue);
//    }
//
//    // Getters and Setters
//    public String getRsaPublicKey() {
//        return rsaPublicKey;
//    }
//
//    public void setRsaPublicKey(String rsaPublicKey) {
//        this.rsaPublicKey = rsaPublicKey;
//    }
//
//    public String getRsaPrivateKey() {
//        return rsaPrivateKey;
//    }
//
//    public void setRsaPrivateKey(String rsaPrivateKey) {
//        this.rsaPrivateKey = rsaPrivateKey;
//    }
//}
