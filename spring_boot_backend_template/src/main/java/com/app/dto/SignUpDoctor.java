package com.app.dto;

import javax.persistence.Column;

import com.app.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class SignUpDoctor {
	
	private Long userId;
	private String qualification;
	private String about;
	private String address;
	private double fees ;
	private Long dept_id ;
	//private User doctor;
}
