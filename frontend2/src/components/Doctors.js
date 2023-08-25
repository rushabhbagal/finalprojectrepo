import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const { deptId } = useParams();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors data from the backend based on the deptId
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/doctors/${deptId}`); // Adjust the API endpoint
        debugger;
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchData();
  }, [deptId]);

//   about: "kuch nahi"
// address: "pune"
// deptName: "ENT"
// doctor_id: 10
// fees: 700
// firstName: "dr.Alif"
// lastName: "Sheikh"
// qualification: "MBBS"

  return (
    <div>
  <h2>Doctors in Department: {deptId}</h2>
  <div className="doctor-card-container">
    {doctors.map((doctor) => (
      <div key={doctor.doctor_id} className="doctor-card">
        <h3>{doctor.firstName} {doctor.lastName}</h3>
        <p>Qualification: {doctor.qualification}</p>
        <p>Address: {doctor.address}</p>
        <p>Department: {doctor.deptName}</p>
        <p>Fees: {doctor.fees}</p>
        <p>About: {doctor.about}</p>
        <Link
          to={`/book-appointment?doctor_id=${doctor.doctor_id}?user_id=${window.localStorage.getItem('userId')}`} // Adjust the URL
          className="book-appointment-button"
        >
          Book Appointment
        </Link>
      </div>
      
    ))}
  </div>
</div>

  );
};

export default Doctors;










// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

// const Doctors = () => {
//   const { dept_id } = useParams(); // Obtain the doctor ID from URL parameter
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     // Fetch doctor appointments when the component mounts
//     fetchDoctorAppointments();
//   }, [dept_id]);

//   const fetchDoctorAppointments = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/doctors/${dept_id}`);
//       setAppointments(response.data);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Doctor Available</h2>
//       <ul>
//         {appointments.map((appointment) => (
//           <li key={appointment.appointmentId}>
//             <div style={{ display: 'none' }}>{appointment.appointmentId}</div>
//             Patient Name: {appointment.firstName} {appointment.lastName}<br />
//             Appointment Date: {appointment.appDate}<br />
//             Slot ID: {appointment.slotId}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Doctors;


