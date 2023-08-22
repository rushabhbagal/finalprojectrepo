package com.app.service;

import java.util.List;

import com.app.dto.AppointmentDto;
import com.app.dto.DisplayPaAppointment;
import com.app.dto.ResponseText;

public interface AppointmentService {
		public ResponseText bookAppointment(AppointmentDto appointDto);
		
		public List<DisplayPaAppointment> showPaAppointment(Long user_id);
		public List<DisplayPaAppointment> showDrAppointment(Long doctor_id);
}
