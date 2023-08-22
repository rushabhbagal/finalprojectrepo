package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Prescription;
import com.app.entities.Appointment;
import java.util.List;

public interface PrescriptionDao extends JpaRepository<Prescription, Long>{
				
				List<Prescription> findByAppmt(Appointment appmt);
}
