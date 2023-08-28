// import React, { useState, useEffect } from 'react';
// import { useParams ,Link } from 'react-router-dom';
// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

// const PatientAppointments = () => {
//   const { user_id } = useParams(); // Obtain the user ID from URL parameter
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     // Fetch patient appointments when the component mounts
//     fetchPatientAppointments();
//   }, [user_id]);

//   const fetchPatientAppointments = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/appointmemts/pshow/${user_id}`);
//       setAppointments(response.data);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   return (
//     <div className="container">
//     <h2>Appointments</h2>
//     <table className="table table-bordered">
//       <thead>
//         <tr>
//         <th style={{ display: 'none' }}>Appointment ID</th>
//           <th>Doctor</th>
//           <th>Appointment Date</th>
//           <th>Time Slot</th>
//           <th>Prescription</th>
//         </tr>
//       </thead>
//       <tbody>
//         {appointments.map((appointment) => (
//           <tr key={appointment.appointmentId}>
//             <td style={{ display: 'none' }}>{appointment.appointmentId}</td>
//             <td>{appointment.firstName} {appointment.lastName}</td>
//             <td>{appointment.appDate}</td>
//             <td>{appointment.slotId}</td>
//             <td>
//                 <Link to='/GetPrescription' className="btn btn-outline-primary">
//                   Get
//                 </Link>
//               </td> 
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
  
//   );
// };

// export default PatientAppointments;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

const PatientAppointments = () => {
  const { user_id } = useParams(); // Obtain the user ID from URL parameter
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch patient appointments when the component mounts
    fetchPatientAppointments();
  }, [user_id]);

  const getSlotTime = (slotId) => {
    const timeSlots = [
      '9:00-9:30 AM', '9:30-10:00 AM', '10:00-10:30 AM', '10:30-11:00 AM',
      '11:00-11:30 AM', '11:30-12:00 AM', '12:00-12:30 PM', '12:30-1:00 PM'
    ];

    return timeSlots[slotId - 1];
  };

  const fetchPatientAppointments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/appointmemts/pshow/${user_id}`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div className="container">
      <h2>Appointments</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ display: 'none' }}>Appointment ID</th>
            <th>Doctor</th>
            <th>Appointment Date</th>
            <th>Time Slot</th>
            <th>Prescription</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.appointmentId}>
              <td style={{ display: 'none' }}>{appointment.appointmentId}</td>
              <td>{appointment.firstName} {appointment.lastName}</td>
              <td>{appointment.appDate}</td>
              <td>{getSlotTime(appointment.slotId)}</td>
              <td>
                <Link
                  to={`/GetPrescription?appmt_id=${appointment.appointmentId}`}
                  className="btn btn-outline-primary"
                >
                  Get
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientAppointments;
