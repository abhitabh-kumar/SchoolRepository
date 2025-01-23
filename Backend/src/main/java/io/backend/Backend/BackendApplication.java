package io.backend.Backend;

import io.backend.Backend.config.RSAKeyRecord;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication(scanBasePackages = "io.backend")
@EnableConfigurationProperties({RSAKeyRecord.class})
@EnableCaching
@EnableTransactionManagement
public class BackendApplication {

 	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
