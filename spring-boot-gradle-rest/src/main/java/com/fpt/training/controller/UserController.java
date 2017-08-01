package com.fpt.training.controller;


import com.fpt.training.model.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/training/api/v1")
public class UserController {

    private static List<User> usersMock = new ArrayList<>();

    static {
        usersMock.add(new User("user", "user"));
        usersMock.add(new User("admin", "admin"));
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getUsers() {
        return usersMock;
    }
}
