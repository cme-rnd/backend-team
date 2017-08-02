package com.fpt.training.controller;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fpt.training.model.User;

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

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public void addUser(@RequestBody User user) {
    	usersMock.add(user);
    }

    @RequestMapping(value = "/users/{userId}", method = RequestMethod.PUT)
    public void updateUser(@PathVariable String userId) {
    	for(User user:usersMock) {
    		if(userId.equals(user.getUserId())) {
    			user.setUserName("Sy");
    		}
    	}
    }

    @RequestMapping(value = "/users/{userId}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable String userId) {
    	Iterator<User> it = usersMock.iterator();
    	while (it.hasNext()) {
    	    if (it.next().getUserId().contains(userId)) {
    	        it.remove();
    	    }
    	}
    }

    @RequestMapping(value = "/users/{userId}", method = RequestMethod.GET)
    public User getUserByUserId(@PathVariable String userId) {
    	for(User user:usersMock) {
    		if(userId.equals(user.getUserId())) {
    			return user;
    		}
    	}
    	return null;
    }
}
