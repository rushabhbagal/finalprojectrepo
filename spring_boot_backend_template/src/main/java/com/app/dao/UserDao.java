package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.entities.User;
import com.app.entities.Doctor;
import java.util.List;

public interface UserDao extends JpaRepository<User, Long> {
	Optional<User> findByEmailAndPassword(String em,String pass);
	
			List<User> findByDr(Doctor dr);
			
}
