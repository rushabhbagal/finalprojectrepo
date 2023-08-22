package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AppointmentDao;
import com.app.dao.PrescriptionDao;
import com.app.dao.UserDao;
import com.app.dto.PresciptionDto;
import com.app.dto.ShowPresciptionDto;
import com.app.entities.Appointment;
import com.app.entities.Prescription;
import com.app.entities.User;

import io.swagger.v3.oas.annotations.servers.Server;

@Service
@Transactional
public class PrescriptionServiceImpl implements PrescriptionService {

	@Autowired
	private AppointmentDao appDao;
	
	@Autowired
	private PrescriptionDao presDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public String addPrescription(PresciptionDto presDto) {
		
		
		Appointment appoint = appDao.findById(presDto.getAppmt_id())
								.orElseThrow(() -> new ResourceNotFoundException("Invalid Dept ID !!!!!"));
			Prescription pres = mapper.map(presDto, Prescription.class); //remember to take incoming dto here 
			pres.setAppmt(appoint);
			
			presDao.save(pres);
		return "added";
	}

	@Override
	public ShowPresciptionDto showPresciption(Long appmt_id) {
			Appointment appoint = appDao.findById(appmt_id)
					.orElseThrow(() -> new ResourceNotFoundException("Invalid appmt_id in show Prescription method"));
			Prescription foundPres = presDao.findByAppmt(appoint).get(0);
			User user = userDao.findById(appoint.getUser().getUserId())
					.orElseThrow(()-> new ResourceNotFoundException("Invalid user_id in show Prescription method"));
			
			ShowPresciptionDto sendPres = mapper.map(foundPres, ShowPresciptionDto.class);
			sendPres.setFirstName(user.getFirstName());
			sendPres.setLastName(user.getLastName());
			sendPres.setAppDate(appoint.getAppDate());
		return sendPres;
	}

}
