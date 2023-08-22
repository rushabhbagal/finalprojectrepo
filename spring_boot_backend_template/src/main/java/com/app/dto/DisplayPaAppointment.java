package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class DisplayPaAppointment {
	
	private String firstName;
	private String lastName;
	private LocalDate appDate;
	private int slotId;
	private Long appointmentId;
	
	
}
