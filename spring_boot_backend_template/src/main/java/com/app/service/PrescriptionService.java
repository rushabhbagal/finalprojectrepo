package com.app.service;

import com.app.dto.PresciptionDto;
import com.app.dto.ShowPresciptionDto;

public interface PrescriptionService {
		
		public String addPrescription(PresciptionDto presDto);
		public ShowPresciptionDto showPresciption(Long appmt_id);
}
