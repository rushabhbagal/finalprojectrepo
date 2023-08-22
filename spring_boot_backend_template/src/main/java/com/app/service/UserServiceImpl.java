package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.SignupRequest;
import com.app.dto.SignupResponse;
import com.app.dto.UpdateRequest;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	
	@Override
	public AuthResp singInUser(AuthRequest request) {
	
		User user = userDao.findByEmailAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Email or Password !!!!"));
		// => signin success , emp : persistent
		// ModelMapper API
		// public DestType map(Object src ,Class<DestType> cls)
		return mapper.map(user, AuthResp.class);
		
		
	}


	@Override
	public AuthResp getUserDetails(Long userId) {
		// TODO Auto-generated method stub
		User user=userDao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));
		AuthResp resp=mapper.map(user, AuthResp.class);
		
		return  resp;
	}


	@Override
	public List<AuthResp> getAllUsers() {
		List<User> users=userDao.findAll();
		List<AuthResp> list=new ArrayList<AuthResp>();
		
		for(User u:users) {
			AuthResp user = mapper.map(u, AuthResp.class);
		list.add(user);
		}
		return list;
	}


	@Override
	public SignupResponse addUserDetails(SignupRequest newUser) {
		// TODO Auto-generated method stub
		
		System.out.println("request "+newUser);
		
		User persitentUser=userDao.save(mapper.map(newUser, User.class));
		
		return mapper.map(persitentUser, SignupResponse.class);
	}


	@Override
	public String deleteUserDetails(Long userId) {
		
		User foundEmp = userDao.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));
		// emp exists !, foundEmp : persistent
		userDao.deleteById(userId);
		return "User details deleted successfully!";
	}


	@Override
	public SignupResponse updateUserDetails(UpdateRequest updatedUser) {
		
		
		User foundUser = userDao.findById(updatedUser.getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));
		// emp exists !, foundEmp : persistent
		
			User user = mapper.map(updatedUser, User.class);
			user.setPassword(foundUser.getPassword());
		
		userDao.save(user);
		
		return mapper.map(user, SignupResponse.class);
		
		
	}
	

	
	
	
}
