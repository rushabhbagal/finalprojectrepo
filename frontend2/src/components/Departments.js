import React from 'react';
//import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import '../CSS/mycss.css'; // Make sure to adjust the CSS path
//import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Departments = () => {
  const departments = [
    { name: 'General', imageSrc: '/Images/General.jpeg', id: 1 },
    { name: 'Cardiology', imageSrc: '/Images/cardiology.jpeg', id: 2 },
    { name: 'Orthopedics', imageSrc: '/Images/orthopedic.jpeg', id: 3 },
    { name: 'ENT', imageSrc: '/Images/ENT.jpeg', id: 4 },
    { name: 'DENTISTRY', imageSrc: '/Images/Dentistry.jpeg', id: 5 },
    { name: 'DERMATOLOGY', imageSrc: '/Images/Dermatolgy.jpeg', id: 6 },
    // Add more departments
  ];
  const navigate = useNavigate(); 
  //const history = useHistory(); // Get the history object

  const handleDivClick = (departmentId) => {
    // Redirect to a new route with the departmentId as a query parameter
    navigate(`/doctors/${departmentId}`);
  };

  return (
    <div className="department-list container">
    <div className="row">
      {departments.map((department) => (
        <div
          className="col-md-4 col-sm-6 department-card" // Adjust the column classes for responsiveness
          key={department.id}
          onClick={() => handleDivClick(department.id)}
        >
          <div className="text-center department" >
            <img src={department.imageSrc} alt={department.name} className="department-image" />
            <p>{department.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

    // <div className="department-list container">
    //   <div className="row justify-content-center">
    //     {departments.map((department) => (
    //       <div
    //         className="col-md-4 department-card"
    //         key={department.id}
    //         onClick={() => handleDivClick(department.id)}
    //       >
    //         <div className="text-center">
    //           <img src={department.imageSrc} alt={department.name} />
    //           <p>{department.name}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Departments;
