package com.fpt.training.controller;


import com.fpt.training.model.User;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    
    @RequestMapping(method = RequestMethod.DELETE, value = "/users/{userId}" )
    public void deleteUser(@PathVariable String userId) {
    	usersMock.removeIf(p -> p.getUserId().equals(userId));
    }
    
    @RequestMapping(method = RequestMethod.PUT, value = "/users/{userId}" )
    public void updateUser(@RequestBody User user,  @PathVariable String userId) {
    	for(int i = 0; i < usersMock.size(); i++) {
    		User upUser = usersMock.get(i);
    		if (upUser.getUserId().equals(userId)) {
    			usersMock.set(i, upUser);
    			break;
    		}
    	}
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public void addUser(@RequestBody User user) {
    	usersMock.add(user);
    }
}
