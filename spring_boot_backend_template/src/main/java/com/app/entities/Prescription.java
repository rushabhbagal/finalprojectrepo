package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
@Table(name = "prescription")

public class Prescription {

	
	@Id //=> PK constraint
	//auto generation of PKs , using auto_increment : constraint
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="pre_id")	//to specify col name
	private Long preId;
	
	@Column(length = 30)
	private String symptoms;
	
	@Column(length = 30)
	private String diagnosis;
	
	@OneToOne
	@JoinColumn(name = "appmt_id")
	private Appointment appmt;
	
}
