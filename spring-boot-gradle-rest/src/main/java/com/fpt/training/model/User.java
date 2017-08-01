package com.fpt.training.model;

public class User {
    String userId;
    String userName;
    public User(){
    	
    }
    
    public User(String userId, String userName) {
        this.userId = userId;
        this.userName = userName;
    }
    
    public User(User newUser) {
        this.userId = newUser.getUserId();
        this.userName = newUser.getUserName();
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


}
