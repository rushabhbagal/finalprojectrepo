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


const AllRoutes = () => {
  return (
    <div>
      <Header/>
      <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Header/>} />
            <Route path="/adduser" element={<Add_User/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/docsignup" element={<Add_Doctor/>} />
            <Route path="/departments" element={<DepartmentList/>} />
            <Route path="/department" element={<Departments/>} />
            <Route path="/doctors/:deptId" element={<Doctors />} />
      </Routes>
      <Footer />
    </div>
  );
};


export default AllRoutes;