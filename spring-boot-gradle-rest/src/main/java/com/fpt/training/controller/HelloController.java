package com.fpt.training.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by HieuNT48 on 7/28/2017.
 */
@RestController
@RequestMapping("/training/api/v1")
public class HelloController {

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public @ResponseBody
    String index() {
        return "Gradle : Hello Spring Boot 11111 3333";
    }
}
