package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import com.app.entities.RoleType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//emp id , full name , salary , join date
@Getter
@Setter
@ToString
public class AuthResp {

	private Long userId;
	private String firstName;
	private String lastName;
	private String mobile;
	private LocalDate dob;
	private RoleType role;
	
}
