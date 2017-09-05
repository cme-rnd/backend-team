package com.fpt.training.model;

public class User {
    String userId;
    String passWord;
    public User(){
    	
    }
    
    public User(String userId, String passWord) {
        this.userId = userId;
        this.passWord = passWord;
    }
    
    public User(User newUser) {
        this.userId = newUser.getUserId();
        this.passWord = newUser.getPassWord();
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}    

}
