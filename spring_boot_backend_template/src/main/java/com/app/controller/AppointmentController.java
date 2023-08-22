package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AppointmentDto;
import com.app.dto.DisplayPaAppointment;
import com.app.dto.ResponseText;
import com.app.service.AppointmentService;

@RestController
@RequestMapping("/appointmemts")
public class AppointmentController {
	
	
	public AppointmentController() {
		System.out.println("in appointment controller ");
	}
	
	@Autowired
	private AppointmentService appService; 
	
	@PostMapping
	public ResponseEntity<?> bookAppointment(@RequestBody AppointmentDto appDto){
		System.out.println(appDto);
		System.out.println("in book appointmemt method of" + getClass());
		appService.bookAppointment(appDto);
		return ResponseEntity.ok(new ResponseText("Appointment booked successfully"));
	}
	
	@GetMapping("/pshow/{user_id}") //pshow means showing appointments for patients
	public ResponseEntity<?> showPatientAppointment(@PathVariable Long user_id){
		
		List<DisplayPaAppointment> paAppointments = appService.showPaAppointment(user_id);
		
		return ResponseEntity.ok(paAppointments);
	}
	
	@GetMapping("/drshow/{doctor_id}") //pshow means showing appointments for patients
	public ResponseEntity<?> showDocotrAppointment(@PathVariable Long doctor_id){
		
		List<DisplayPaAppointment> paAppointments = appService.showDrAppointment(doctor_id);
		
		return ResponseEntity.ok(paAppointments);
	}
}
