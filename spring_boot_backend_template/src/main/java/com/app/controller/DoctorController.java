package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.UserDao;
import com.app.dto.DisplayDoctorDto;
import com.app.dto.ResponseText;
import com.app.dto.SignUpDoctor;
import com.app.entities.Doctor;
import com.app.entities.User;
import com.app.service.DoctorService;



@RestController
@RequestMapping("/doctors")

public class DoctorController {
	
	@Autowired
	private DoctorService docService;
	
	
	
	public DoctorController() {
		System.out.println("in the ctor of" + getClass());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addDoctor(@RequestBody SignUpDoctor doc) {
		
		
		
		System.out.println("in add Dcotor method of " + getClass());
		System.out.println(doc);
		  ResponseText message = docService.addDcotor(doc);
		return ResponseEntity.ok(message);
	}
	
//	@DeleteMapping("/{}")
//	public ResponseEntity<?> deleteDoctor(@PathVariable Long dept_id){
		
	//}
	
	@GetMapping
	public ResponseEntity<?> displayDoctors(){
		
		   
		    return ResponseEntity.ok( docService.displayDoctors());
	}
	@GetMapping("/{dept_id}")
	public ResponseEntity<?> displayByDeptId(@PathVariable Long dept_id){
		List<DisplayDoctorDto> doctors = docService.displayDoctorsByDeptId(dept_id);
		return ResponseEntity.ok(doctors);
	}
}
