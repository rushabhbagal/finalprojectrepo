package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="dept")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Department{
	
	@Id //=> PK constraint
	//auto generation of PKs , using auto_increment : constraint
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="dept_id")	//to specify col name
	private Long deptId;
	
	@Enumerated(EnumType.STRING)
	@Column(name="dept_name")
	private DeptType deptName;
	@OneToMany(mappedBy = "selectedDepartment",cascade = CascadeType.ALL)
	private List<Doctor> doctors = new ArrayList<>();
}
