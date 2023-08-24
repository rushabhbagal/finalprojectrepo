import React, { useState } from "react";
import "../CSS/Add_User.css";
import user from "../img/useravatar.png"; //check this and change the image if required
// import { message, Upload } from "antd";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { DocRegister } from "../Redux/auth/action"; //, SendPassword  removed from here
//import Sidebar from "../../GlobalFiles/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const notify = (text) => toast(text);

const Add_Doctor = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const InitData = {

    email: "",
  qualification: "",
  about: "",
  address: "",
  fees: 0,
  dept_id: 1

   

   
  };
  const [UserValue, setUserValue] = useState(InitData);

  const HandleDoctorChange = (e) => {
    setUserValue({ ...UserValue, [e.target.name]: e.target.value });
  };
 const navigate = useNavigate(); //added for navigation after signup
  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(DocRegister(UserValue)).then((res) => {
      if (res.message === "User already exists") {
        setLoading(false);
        return notify("User Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }
      notify("Doctor specific info Added");

      return navigate("/");

    //   if (UserValue.role === "DOCTOR") {
    //     notify("Add more information related to doctor");
    //     setLoading(false);
    //     return navigate("/docsignup");
    //   }

      // let data = {
      //   email: res.data.email,
      //   password: res.data.password,
      //   userId: res.data.userID,
      // };
      // dispatch(SendPassword(data)).then((res) => notify("Account Detais Sent"));
      // setLoading(false);
      // setUserValue(InitData);
    });
  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  // if (data?.user.userType !== "admin") {
  //   return <Navigate to={"/dashboard"} />;
  // }

  return (
    <>
      <ToastContainer />
      <div className="container">
        {/* <Sidebar /> */}
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Add User</h1>
            <img src={user} alt="doctor" className="avatarimg" />
            <form onSubmit={HandleDoctorSubmit}>
            <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    value={UserValue.email}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
         </div>
              <div>
                <label>Enter Your Qualification</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="e.g. MBBS"
                    name="qualification"
                    value={UserValue.qualification}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Select Speciality</label>
                <div className="inputdiv">
                  <select
                    name="dept_id"
                    value={UserValue.dept_id}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose role">Select</option>
                    <option value="1">GENERAL_MEDICINE</option>
                    <option value="2">CARDIOLOGY</option>
                    <option value="3">ORTHOPEDIC</option>
                    <option value="4">ENT</option>
                    <option value="5">DENTISTRY</option>
                    <option value="6">DERMATOLOGY</option>
                    
                  </select>
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="e.g. Pune"
                    name="address"
                    value={UserValue.address}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Fees</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="E.g.100"
                    name="fees"
                    value={UserValue.fees}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Other Info About Me</label>
                <div className="inputdiv">
                  <textarea
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="about"
                    value={UserValue.about}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              
              
              <button type="submit" className="formsubmitbutton">
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Doctor;
