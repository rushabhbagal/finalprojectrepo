package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Doctor;
import com.google.common.base.Optional;
import com.app.entities.Department;
import java.util.List;

public interface DoctorDao extends JpaRepository<Doctor, Long> {

	//Optional<Employee> findByEmailAndPassword(String em,String pass);
	//Optional<Doctor> findBySelectedDepartment(Long dept_id);
	List<Doctor> findBySelectedDepartment(Department selecteddepartment);
	
}
