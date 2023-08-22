package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
@Table(name = "reviews")

public class Review {

	@Id //=> PK constraint
	//auto generation of PKs , using auto_increment : constraint
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="review_id")	//to specify col name
	private Long reviewId;
	
	@ManyToOne
	@JoinColumn(name = "doctor_id")
	private Doctor rdoctorId;
	//private List<Doctor> doctorList=new ArrayList<>();
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User ruserId;
	//private List<User> userList=new ArrayList<>();
	
	
	private double rating;
	
	@Column(length = 30)
	private String review;
	
}
