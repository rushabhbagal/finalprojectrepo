import React, { useState } from "react";
import "../CSS/Add_User.css";
import user from "../img/useravatar.png"; //check this and change the image if required
// import { message, Upload } from "antd";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { UserRegister } from "../Redux/auth/action"; //, SendPassword  removed from here
//import Sidebar from "../../GlobalFiles/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const notify = (text) => toast(text);

const Add_User = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const InitData = {

    firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  password: "",
  dob: "",
  role: ""

    // userName: "",
    // age: "",
    // mobile: "",
    // email: "",
    // gender: "",
    // DOB: "",
    // address: "",
    // education: "",
    // department: "",
    // userID: Date.now(),
    // password: "",
    // details: "",
    // bloodGroup: "",
  };
  const [UserValue, setUserValue] = useState(InitData);

  const HandleDoctorChange = (e) => {
    setUserValue({ ...UserValue, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate(); //added for navigation after signup
  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(UserRegister(UserValue)).then((res) => {
      if (res.message === "User already exists") {
        setLoading(false);
        return notify("User Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }
      notify("User Added");

      if (UserValue.role === "DOCTOR") {
        notify("Add more information related to doctor");
        setLoading(false);
        return navigate("/docsignup");
      }

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
                <label>First Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={UserValue.firstName}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Last Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={UserValue.lastName}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Contact Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Emergency Number"
                    name="mobile"
                    value={UserValue.mobile}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
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
                <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={UserValue.password}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Birthdate</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="dob"
                    value={UserValue.dob}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Role-Doctor/Patient</label>
                <div className="inputdiv">
                  <select
                    name="role"
                    value={UserValue.role}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose role">Select</option>
                    <option value="USER">Patient</option>
                    <option value="DOCTOR">Doctor</option>
                    
                  </select>
                </div>
              </div>
              
              {/* <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={UserValue.age}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div> */}
              
              
              </div>
              {/* <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    value={UserValue.gender}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label>Address</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={UserValue.address}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Education</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg.MBBS"
                    name="education"
                    value={UserValue.education}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div> */}

              {/* <div>
                <label>Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodGroup"
                    value={UserValue.bloodGroup}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div> */}

              
              {/* <div>
                <label>Other Info</label>
                <div className="inputdiv">
                  <textarea
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="details"
                    value={UserValue.details}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div> */}
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

export default Add_User;
