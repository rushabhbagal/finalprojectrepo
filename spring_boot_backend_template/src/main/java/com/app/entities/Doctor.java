package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="doctors")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Doctor {
	
	@Id //=> PK constraint
	//auto generation of PKs , using auto_increment : constraint
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="doctor_id")	//to specify col name
	private Long doctorId;
	
	
	@OneToOne
	@JoinColumn(name="doctor_id")
	@MapsId
	private User doctor;
	
	@ManyToOne
	@JoinColumn(name="dept_id")
	private Department selectedDepartment;
	//private int dept_id;
	
	@Column(length = 30,nullable = false)
	private String qualification;
	
	@Column(length = 200,nullable = false)
	private String about;
	
	@Column(length = 50,nullable = false)
	private String address;
	
	@Column
	private double fees ;
	
	@OneToMany(mappedBy = "doctor")
	private List<Appointment> appointment = new ArrayList<>();
	
	@OneToMany(mappedBy = "rdoctorId")
	private List<Review> dlist=new ArrayList<>();
	
	
}
