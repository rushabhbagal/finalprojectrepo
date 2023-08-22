package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.SignupRequest;
import com.app.dto.SignupResponse;
import com.app.dto.UpdateRequest;
import com.app.entities.User;
import com.app.service.UserService;

@RestController // =@Controller at cls level + @ResponseBody added over ret
//types of all request  handling methods : @RequestMethod /@GetMapping/@PostMapping...
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;
	
	public UserController()
	{
		System.out.println("in the controller "+getClass());
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signInUser(@RequestBody @Valid AuthRequest request) {
		System.out.println("auth req " + request);
		
		AuthResp resp = userService.singInUser(request);
		return ResponseEntity.ok(resp);
	}
	
	@GetMapping
	public List<AuthResp> listAllUser() {
		System.out.println("in list emps");
		return userService.getAllUsers();
	}

	
	
	@GetMapping("/{userId}")
	// @PathVariable => method arg level annotation , to bind incoming URI variable
	// to the method argument
	public AuthResp getUserDetails(@PathVariable Long userId) {
		System.out.println("in get emp details " + userId);
		return userService.getUserDetails(userId);
	}
	
	
	@PostMapping
	public ResponseEntity<?> addNewUser(@RequestBody @Valid SignupRequest requestDTO)
	{
		System.out.println("in add new User "+requestDTO);
		
		return ResponseEntity.
				status(HttpStatus.CREATED).
				body(userService.addUserDetails(requestDTO));
	}
	
	@DeleteMapping("/{userId}")
	public ApiResponse deleteUserDetails(@PathVariable Long userId) {
		System.out.println("in delete emp details " + userId);
		return new ApiResponse(userService.deleteUserDetails(userId));
	}

	
	@PutMapping
	public SignupResponse updateUserDetails(@RequestBody UpdateRequest user) {
		//System.out.println("in update user " + user);// not null , existing in db
		return userService.updateUserDetails(user);
	}
}
