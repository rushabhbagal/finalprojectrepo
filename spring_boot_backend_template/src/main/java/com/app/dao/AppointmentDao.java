package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Appointment;
import com.app.entities.User;
import java.util.List;
import com.app.entities.Doctor;

public interface AppointmentDao extends JpaRepository<Appointment, Long>{
	
				List<Appointment> findByUser(User user);
				
				List<Appointment> findByDoctor(Doctor doctor);
}
