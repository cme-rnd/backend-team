package com.fpt.training.controller;


import com.fpt.training.model.User;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

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
    
    
    @RequestMapping(value = "/users", method = RequestMethod.PUT)
    public List<User> getUsers(@RequestBody User newUser) {

    	usersMock.add(newUser);

        //validate login here

        return usersMock;

    }
    
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public List<User> updateUser() {
        return usersMock;
    }
    
    @RequestMapping(value = "/users/{userID}", method = RequestMethod.DELETE)
    public List<User> deleteUser(@PathVariable String userID) {
    	for(int i = 0 ; i < usersMock.size() ; i++ ){
    		if(userID.equals(usersMock.get(i).getUserId())){
    			usersMock.remove(i);
    			return usersMock;
    		}
    	}
        return usersMock;
    }
}
