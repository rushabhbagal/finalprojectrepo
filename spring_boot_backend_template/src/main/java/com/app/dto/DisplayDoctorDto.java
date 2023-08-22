package com.app.dto;

import javax.persistence.Column;

import com.app.entities.DeptType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
//@ToString
@NoArgsConstructor
@AllArgsConstructor
public class DisplayDoctorDto {
	private Long doctor_id; //edited so that we can get dr_id in appointment dto
	private String firstName;	
	private String lastName;
	private String qualification;
	private String about;
	private String address;
	private double fees ;
	private DeptType deptName;
	
}
