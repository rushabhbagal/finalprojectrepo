package com.app.entities;

import java.time.LocalDate;
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
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class User{
	
	@Id //=> PK constraint
	//auto generation of PKs , using auto_increment : constraint
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="user_id")	//to specify col name
	private Long userId;
	
	@Column(name = "first_name", length = 20,nullable = false) // varchar(20)
	private String firstName;
	@Column(name = "last_name", length = 20,nullable = false)
	private String lastName;
	
	@Column(length = 30,nullable = false)
	private String mobile;
	
	@Column(length = 30, unique = true,nullable = false)
	private String email;
	
	
	@Column(nullable = false)
	private LocalDate dob;
	
	@Column(length = 30,nullable = false)
	private String password;
	
	@Transient
	@Column(length = 30,nullable = false)
	private String confirmPassword;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30,nullable = false)
	private RoleType role;
	
	
	@OneToOne(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
	private Doctor dr;
	
	@OneToMany(mappedBy = "user")
	
	private List<Appointment> appmnt = new ArrayList<>();

	
	@OneToMany(mappedBy = "ruserId")
	private List<Review> ulist=new ArrayList<>();
}
