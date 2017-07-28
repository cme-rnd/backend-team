package com.fpt.training;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.fpt.training"})
public class SpringBootGradleRestApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootGradleRestApplication.class, args);
    }
}
