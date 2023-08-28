import React from "react";
import { Route, Routes } from "react-router-dom";





import Footer from '../Footer';
import Login from "../Dashboard/Login/Login";
import Header from "../Header";
import Add_User from "../components/Add_User";
import SignUp from "../components/SignUp";
import Add_Doctor from "../components/Add_Doctor";
import DepartmentList from "../components/DepartmentList";
import Departments from "../components/Departments";
import Doctors from "../components/Doctors";
import BookAppointment from "../components/BookAppointment";
import Navbar from "../components/Navbar";
//import ProtectedRoute from "../components/ProtectedRoute";
import DoctorAppointments from "../components/DoctorAppointments ";
import GetPrescription from "../components/GetPrescription";
import SignOut from "../components/SignOut";
import ViewProfile from "../components/ViewProfile";
import PatientAppointments from "../components/ViewProfile";
import UpdateProfile from "../components/ViewProfile";
import Prescription from "../components/Prescription";


const AllRoutes = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Header/>} />
            <Route path="/adduser" element={<Add_User/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/docsignup" element={<Add_Doctor/>} />
            <Route path="/departments" element={<DepartmentList/>} />
            <Route path="/department" element={<Departments/>} />
            <Route path="/doctors/:deptId" element={<Doctors />} />
            <Route path="/bookappointment" element={<BookAppointment />} />
            <Route path="/appointmemts/:user_id" element={<DoctorAppointments />} />
            <Route path="/GetPrescription" element={<GetPrescription/>} />
            <Route path="/SignOut" element={<SignOut/>} />
            <Route path="/ViewProfile/:user_id" element={<ViewProfile />} />
            <Route path="/appointmemts/p/:user_id" element={<PatientAppointments />} />
            <Route path="/UpdateProfile/:user_id" element={<UpdateProfile />} />
            <Route path="/Prescription" element={<Prescription />} />





            {/* <ProtectedRoute path="/appointmemts/:user_id" element={<DoctorAppointments/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
};


export default AllRoutes;