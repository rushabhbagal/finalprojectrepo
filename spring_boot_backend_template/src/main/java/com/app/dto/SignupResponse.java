package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import com.app.entities.RoleType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class SignupResponse {

	private Long userId;
	
	private String firstName;

	private String lastName;
	
	private String mobile;
	
	private String email;
	
		
	private LocalDate dob;
	
	private RoleType role;
	
}
