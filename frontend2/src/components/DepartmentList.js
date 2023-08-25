
import React, { useState } from 'react';
import "../CSS/mycss.css"
import { useHref } from 'react-router-dom';



const DepartmentList = () => {
  
  const [dept, setDept] = useState();
  const SelectDept = (e) => {
    debugger;
    setDept(e);
    console.log(dept);
   //setDept({...dept, [e.target.name]: e.target.value});
    //setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  return (
      <div className="department-list container" > 
        <div className='row justify-content-center'>

            {/* <div className="parent-container" >     */}
      <div >
        <img src='Images/cardiology.jpeg'/>
      </div>
      <div>
        <img src='Images/cardiology.jpeg'/>
      </div>
      <div>
        <img src='Images/cardiology.jpeg'/>
      </div>
      <div>
        <img src='Images/cardiology.jpeg'/>
      </div>
      <div>
        <img src='Images/cardiology.jpeg'/>
      </div>
      <div>
        <img src='Images/cardiology.jpeg'/>
      </div>

        </div>
    </div>
  );
};

export default DepartmentList;


