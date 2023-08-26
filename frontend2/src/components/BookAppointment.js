import React, { useState } from 'react';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';
import { searchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const BookAppointment = () => {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('user_id');
  const doctorId = searchParams.get('doctor_id');
  const [appDate, setAppDate] = useState(null);
  const [slotId, setSlotId] = useState('');

  const handleDateChange = (e) => {
    setAppDate(e.target.value);
  };

  const handleSlotSelect = (e) => {
    setSlotId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {debugger;
      const response = await axios.post('http://localhost:8080/appointmemts', {
        userId,
        doctorId,
        appDate: appDate,
        slotId: slotId,
      });
      console.log('Appointment booked:', response.data);
    } catch (error) {
      console.error('Error booking appointment:', error.response);
    }   
  };

  return (
    <div className="container col-md-4 justify-content-center">
      <h1>Book Appointment</h1>
      <form onSubmit={handleSubmit}>

        {/* <label>
          Doctor ID:
          <input
            type="text"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
          />
        </label>
        <br />
        <label>
          User ID:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label> */}
        <br />
            <div>
            <label for="selectedSlot"> Date:&nbsp;&nbsp;&nbsp;</label>
              <input type="date" onChange={handleDateChange} value={appDate} name="selectedDate"></input>
            </div>
            {/* <label>
          Select Date:
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </label> */}
        
        <br />
        <div>
                <label>Select Slot</label>
                <div className="inputdiv">
                  <select
                    name="selectedSlot"
                    value={slotId}
                    onChange={handleSlotSelect}
                    required
                  >
                    <option value="Choose role">Select</option>
                    <option value="1">9:00 - 9:30 AM</option>
                    <option value="2">9:30 - 10:00 AM</option>
                    <option value="3">10:00 - 10:30 AM</option>
                    <option value="4">10:30 - 11:00 AM</option>
                    <option value="5">11:00 - 11:30 AM</option>
                    <option value="6">11:30 - 12:00 AM</option>
                    <option value="5">12:00 - 12:30 AM</option>
                    <option value="6">12:30 - 1:00 AM</option>
                    
                  </select>
                </div>
              </div>
        <div className="slot-container">
          {/* <div
            className={`slot ${selectedSlot === 'Morning' ? 'selected' : ''}`}
            onClick={() => handleSlotSelect('Morning')}
          >
            Morning
          </div>
          <div
            className={`slot ${selectedSlot === 'Afternoon' ? 'selected' : ''}`}
            onClick={() => handleSlotSelect('Afternoon')}
          >
            Afternoon
          </div>
          Add more slot options as needed */}
        </div>
        <br />
        <button  type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;








// import { useState } from "react";
// import { useParams } from "react-router-dom";





// const BookAppointment= () =>{

//     const { userId } = useParams();
//     const { doctorId } = useParams();
//     const [formvalue, setFormvalue] = useState({
//         email: "",
//         password: "",
//       });

//     const [ appointments,setAppointments] = useState({
//         date: "",
//         slot: "0",
//     });
// };