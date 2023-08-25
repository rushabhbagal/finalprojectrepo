import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

const DoctorAppointments = () => {
  const { doctor_id } = useParams(); // Obtain the doctor ID from URL parameter
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch doctor appointments when the component mounts
    fetchDoctorAppointments();
  }, [doctor_id]);

  const fetchDoctorAppointments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/appointmemts/drshow/${doctor_id}`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div className="container">
      <h2>Doctor Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.appointmentId}>
            <div style={{ display: 'none' }}>{appointment.appointmentId}</div>
            Patient Name: {appointment.firstName} {appointment.lastName}<br />
            Appointment Date: {appointment.appDate}<br />
            Slot ID: {appointment.slotId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorAppointments;