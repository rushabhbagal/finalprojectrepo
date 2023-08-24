import React from "react";
import { Route, Routes } from "react-router-dom";





import Footer from '../Footer';
import Login from "../Dashboard/Login/Login";
import Header from "../Header";
import Add_User from "../components/Add_User";
import SignUp from "../components/SignUp";
import Add_Doctor from "../components/Add_Doctor";


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
      </Routes>
      <Footer />
    </div>
  );
};


export default AllRoutes;