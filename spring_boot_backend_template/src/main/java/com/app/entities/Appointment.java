package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "appointment")

public class Appointment {

	@Id //=> PK constraint
	//auto generation of PKs , using auto_increment : constraint
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="app_id")	//to specify col name
	private Long appointmentId;
	
	
	@ManyToOne
	@JoinColumn(name = "doctor_id")
	private Doctor doctor;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	
//	@ManyToOne //mandatory 
//	@JoinColumn(name="dept_id")//optional BUT reco.!
//	private Department selectedDepartment;
	
	@Column(name = "app_date")
	private LocalDate appDate;
	
	@Column(name = "slot_id")
	private int slotId;
	
	
	@OneToOne(mappedBy = "appmt")
	private Prescription presciption;
}
