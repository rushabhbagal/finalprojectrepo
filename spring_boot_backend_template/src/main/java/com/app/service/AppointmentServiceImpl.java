package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AppointmentDao;
import com.app.dao.DoctorDao;
import com.app.dao.UserDao;
import com.app.dto.AppointmentDto;
import com.app.dto.DisplayPaAppointment;
import com.app.dto.ResponseText;
import com.app.entities.Appointment;
import com.app.entities.Department;
import com.app.entities.Doctor;
import com.app.entities.User;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService {

		public AppointmentServiceImpl() {
			System.out.println("in ctor of " + getClass());
		}
		
		@Autowired
		private AppointmentDao appDao;
		
		@Autowired
		private UserDao userDao; //we have used this bcz we have to find user as a patient and set it into appointment
		
		//similarly to doctor which is user
		@Autowired
		private DoctorDao docDao;
		
		@Autowired
		private ModelMapper mapper;
		
	
		@Override
		public ResponseText bookAppointment(AppointmentDto appointDto) {
				
			User userPatient = userDao.findById(appointDto.getUserId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid Dept ID !!!!!"));
			
			Doctor userDoctor = docDao.findById(appointDto.getDoctorId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid Dept ID !!!!!"));
			
			Appointment appointment = new Appointment();
			appointment = mapper.map(appointDto, Appointment.class);
			appointment.setUser(userPatient);
			appointment.setDoctor(userDoctor);
		 	
			
			appDao.save(appointment);
			
				
			return null;
		}

		@Override
		public List<DisplayPaAppointment> showPaAppointment(Long user_id) {
			
			System.out.println("in showPaAppointment in" + getClass());
			
			List<DisplayPaAppointment> list = new ArrayList<>();
			
			User userPatient = userDao.findById(user_id)
					.orElseThrow(() -> new ResourceNotFoundException("Invalid Dept ID !!!!!"));
			
						List<Appointment> appList = appDao.findByUser(userPatient); //since it requires user as i/p
						
						DisplayPaAppointment tempApp = new DisplayPaAppointment();
						
						for(Appointment a : appList) {
							 Doctor doc = docDao.findById(a.getDoctor().getDoctorId())
							.orElseThrow(() -> new ResourceNotFoundException("Invalid Doctor ID which got from appointment!!!!!"));
						
							 User user = userDao.findByDr(doc).get(0);
									
									tempApp = mapper.map(a, DisplayPaAppointment.class);
									tempApp.setFirstName(user.getFirstName());
									tempApp.setLastName(user.getLastName());
									
									list.add(tempApp);
							
						}
			
			return list;
		}

		@Override
		public List<DisplayPaAppointment> showDrAppointment(Long doctor_id) {
			
			System.out.println("in showDrAppointment in" + getClass());
			
				List<DisplayPaAppointment> list = new ArrayList<>();
			
//			User userPatient = userDao.findById(doctor_id)
//					.orElseThrow(() -> new ResourceNotFoundException("Invalid Dept ID !!!!!"));
			
							Doctor doc	= docDao.findById(doctor_id)
								.orElseThrow(() -> new ResourceNotFoundException("Invalid Dr ID in show dr appointment !!!!!"));
				//here we require doctor object to pass in findByDoctor method so we dounded the doctor
						List<Appointment> appList = appDao.findByDoctor(doc);
						
						DisplayPaAppointment tempApp = new DisplayPaAppointment();
						
						for(Appointment a : appList) {
							 
								User user = userDao.findById(a.getUser().getUserId())
										.orElseThrow(() -> new ResourceNotFoundException("Invalid Dr ID in show dr appointment !!!!!"));
							 
									
									tempApp = mapper.map(a, DisplayPaAppointment.class);
									tempApp.setFirstName(user.getFirstName());
									tempApp.setLastName(user.getLastName());
									
									list.add(tempApp);
							
						}
						
			
			return list;
		}
}
