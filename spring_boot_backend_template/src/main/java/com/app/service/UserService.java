package com.app.service;

import java.util.List;

import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.SignupRequest;
import com.app.dto.SignupResponse;
import com.app.dto.UpdateRequest;

public interface UserService {


	List<AuthResp> getAllUsers();
	
	AuthResp singInUser(AuthRequest request);
	

	AuthResp getUserDetails(Long userId);
	
	// add a method to add new emp details
	SignupResponse addUserDetails(SignupRequest newUser);// i/p : transient emp , id=null
	
	//add a method to delete existing emp details
	String deleteUserDetails(Long userId);

	// add a method to update existing emp details
	SignupResponse updateUserDetails(UpdateRequest user);// detached emp , id=non null ,existing in db
	
}
