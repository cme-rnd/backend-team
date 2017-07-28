package com.fpt.training.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by HieuNT48 on 7/28/2017.
 */
@RestController
public class HelloController {
    @RequestMapping("/aa")
    public String index() {
        return "Gradle : Hello Spring Boot!";
    }
}
