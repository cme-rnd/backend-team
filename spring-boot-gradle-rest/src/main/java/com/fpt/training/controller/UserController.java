package com.fpt.training.controller;


import com.fpt.training.model.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping("/training/api/v1")
public class UserController {

    private static List<User> usersMock = new ArrayList<>();

    static {
        usersMock.add(new User("FPT SOFTWARE", "user"));
        usersMock.add(new User("HO CHI MINH", "admin"));
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getUsers() {
        return usersMock;
    }
}
