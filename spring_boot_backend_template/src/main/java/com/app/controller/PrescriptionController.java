package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PresciptionDto;
import com.app.dto.ResponseText;
import com.app.dto.ShowPresciptionDto;
import com.app.service.PrescriptionService;

@RestController
@RequestMapping("/prescription")
public class PrescriptionController {
	
	@Autowired
	private PrescriptionService presService;
		
	@PostMapping
	public ResponseEntity<?> addPrescription(@RequestBody PresciptionDto presDto){
		
						presService.addPrescription(presDto);
		
		return ResponseEntity.ok(new ResponseText("Prescription added successfully"));
	}
	
	@GetMapping("/{appmt_id}")
	public ResponseEntity<?> showPrescription(@PathVariable Long appmt_id){
		
		ShowPresciptionDto showPresciption = presService.showPresciption(appmt_id);
		
		return ResponseEntity.ok(showPresciption);
	}
	
	
}
