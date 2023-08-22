package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.Future;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.app.entities.RoleType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SignupRequest {

	//@Length(min = 4,max = 10,message = "invalid email length")
	@NotBlank(message = "first name can't be blank")
	private String firstName;
	
	@NotBlank(message = "last name can't be blank")
	private String lastName;
	
	@NotBlank(message = "Mobile must be supplied")
	private String mobile;
	
	
	@NotBlank(message = "Email must be supplied")
	@Email(message = "Invalid Email")
	private String email;
	
	//@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Invalid password format")
	private String password;	
	
	//@NotBlank(message = "invalid date of birth")
	//@NotNull
	//@DateTimeFormat(pattern="dd-MMM-yyyy")
	private LocalDate dob;
	
	//@NotBlank(message = "role must be supplied")
	private RoleType role;
	
}
