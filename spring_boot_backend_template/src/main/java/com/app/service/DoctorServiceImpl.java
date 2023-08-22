package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.DepartmentDao;
import com.app.dao.DoctorDao;
import com.app.dao.UserDao;
import com.app.dto.DisplayDoctorDto;
import com.app.dto.ResponseText;
import com.app.dto.SignUpDoctor;
import com.app.entities.Department;
import com.app.entities.Doctor;
import com.app.entities.User;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
	
		public DoctorServiceImpl() {
			System.out.println("in the ctor of" + getClass());
		}
		
	@Autowired	
	private DoctorDao docDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private DepartmentDao deptDao;

	@Override
	public ResponseText addDcotor(SignUpDoctor doc) {
		
		//Optional<User> user = userDao.findById(doc.getUserId());
		User foundUser = userDao.findById(doc.getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));
		Department dept = deptDao.findById(doc.getDept_id())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Dept ID !!!!!"));
		Doctor newDoc = new Doctor();
		newDoc.setDoctor(foundUser);
		newDoc.setSelectedDepartment(dept);
		newDoc.setAbout(doc.getAbout());
		newDoc.setFees(doc.getFees());
		newDoc.setQualification(doc.getQualification());
		newDoc.setAddress(doc.getAddress());
		
		// newDoc = mapper.map(doc, Doctor.class);
		//doc.setDoctor(foundUser);
		
		docDao.save(newDoc);
		return new ResponseText("Doctor details added successfully");  //need to add new keyword here as you generating object of response text 
		//like mam's ApiResponse
	}

	@Override
	public List<DisplayDoctorDto> displayDoctors() {
		System.out.println("In displayDoctors method of" + getClass());
		           List<Doctor> doctors = docDao.findAll();
		           List<DisplayDoctorDto> list = new ArrayList<>();   //if set null will give nullpointer in list.add
		         
		           for(Doctor d : doctors ) {
		        	   DisplayDoctorDto dtoDoctor =  mapper.map(d, DisplayDoctorDto.class);
		        	   
		        	   User foundUser = userDao.findById(d.getDoctorId())
		       				.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));
		        	   Department foundDept = deptDao.findById(d.getSelectedDepartment().getDeptId())
		       				.orElseThrow(() -> new ResourceNotFoundException("Invalid Dept ID !!!!!"));
		        	   
		        	   dtoDoctor.setFirstName(foundUser.getFirstName());
		               dtoDoctor.setLastName(foundUser.getLastName());
		               dtoDoctor.setDeptName(foundDept.getDeptName());
		               dtoDoctor.setDoctor_id(foundUser.getUserId());
		        	   
		           list.add(dtoDoctor);
		           }
		return list;
	}

	@Override
	public List<DisplayDoctorDto> displayDoctorsByDeptId(Long dept_id) {
		
		Department foundDept = deptDao.findById(dept_id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Dept ID !!!!!"));
		 
		List<DisplayDoctorDto> list = new ArrayList<>(); 
		 
		List<Doctor> doctors = docDao.findBySelectedDepartment(foundDept);
        
      
        for(Doctor d : doctors ) {
        DisplayDoctorDto dtoDoctor =  mapper.map(d, DisplayDoctorDto.class);
        
        User foundUser = userDao.findById(d.getDoctorId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));
        dtoDoctor.setFirstName(foundUser.getFirstName());
        dtoDoctor.setLastName(foundUser.getLastName());
        dtoDoctor.setDeptName(foundDept.getDeptName());
        dtoDoctor.setDoctor_id(foundUser.getUserId());
        
        
        
        list.add(dtoDoctor);
        }
		return list;
        }
	
	

	
}
