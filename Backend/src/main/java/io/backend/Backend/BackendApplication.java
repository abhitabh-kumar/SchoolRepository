package io.backend.Backend;

import io.backend.Backend.config.RSAKeyRecord;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication(scanBasePackages = "io.backend")
@EnableConfigurationProperties({RSAKeyRecord.class})
@EnableCaching
public class BackendApplication {

 	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
