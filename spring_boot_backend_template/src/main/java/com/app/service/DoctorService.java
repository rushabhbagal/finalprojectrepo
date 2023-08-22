package com.app.service;

import java.util.List;

import com.app.dto.DisplayDoctorDto;
import com.app.dto.ResponseText;
import com.app.dto.SignUpDoctor;
import com.app.entities.Doctor;

public interface DoctorService {
	ResponseText addDcotor(SignUpDoctor doc);
	
	List<DisplayDoctorDto> displayDoctors();
	
	List<DisplayDoctorDto> displayDoctorsByDeptId(Long dept_id);
}
