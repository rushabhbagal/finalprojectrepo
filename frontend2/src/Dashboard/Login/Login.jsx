import React, { useState } from "react";
import { Radio } from "antd";
import banner from "../../img/banner.png";
import admin from "../../img/admin.jpg";
import "./Login.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  
  forgetPassword,
  UserLogin,
} from "../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Drawer } from "antd";
const notify = (text) => toast(text);

const Login = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // ************************************************
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("User");
  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const Handlechange = (e) => {
   
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (formvalue.email !== "" && formvalue.password !== "") {
      if (placement === "User") {
        let data = {
          ...formvalue,
          UserID: formvalue.email,
        };
        dispatch(UserLogin(data)).then((res) => {
          if (res.message === "Successful") {
            //debugger; 
            notify("Login Successful");
            setLoading(false);
            window.localStorage.setItem('role',res.role);
            window.localStorage.setItem('userId',res.userId);
                window.localStorage.setItem('fname', res.firstName);
                   //to store locally
            if(res.role === "USER"){
              return navigate("/department");
            }
            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      // } else if (placement === "Doctor") {
      //   let data = {
      //     ...formvalue,
      //     docID: formvalue.ID,
      //   };
      //   console.log(data);
      //   dispatch(DoctorLogin(data)).then((res) => {
      //     if (res.message === "Successful") {
      //       notify("Login Successful");
      //       setLoading(false);

      //       return navigate("/dashboard");
      //     }
      //     if (res.message === "Wrong credentials") {
      //       setLoading(false);

      //       notify("Wrong credentials");
      //     }
      //     if (res.message === "Error") {
      //       setLoading(false);

      //       notify("Something went Wrong, Please Try Again");
      //     }
      //   });
      // } else if (placement === "Admin") {
      //   let data = {
      //     ...formvalue,
      //     adminID: formvalue.ID,
      //   };
      //   dispatch(AdminLogin(data)).then((res) => {
      //     if (res.message === "Successful") {
      //       notify("Login Successful");
      //       setLoading(false);

      //       return navigate("/dashboard");
      //     }
      //     if (res.message === "Wrong credentials") {
      //       setLoading(false);

      //       notify("Wrong credentials");
      //     }
      //     if (res.message === "Error") {
      //       setLoading(false);

      //       notify("Something went Wrong, Please Try Again");
      //     }
      //   });
      }
    }
  };

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  const [ForgetPassword, setForgetPassword] = useState({
    type: "",
    email: "",
  });

  const HandleForgetPassword = (e) => {
    setForgetPassword({ ...ForgetPassword, [e.target.name]: e.target.value });
  };

  const [forgetLoading, setforgetLoading] = useState(false);

  const HandleChangePassword = () => {
    if (ForgetPassword.type === "") {
      return notify("Please Fill all Details");
    }
    setforgetLoading(true);
    dispatch(forgetPassword(ForgetPassword)).then((res) => {
      if (res.message === "User not found") {
        setforgetLoading(false);
        return notify("User Not Found");
      }
      setForgetPassword({
        type: "",
        email: "",
      });
      onClose();
      setforgetLoading(false);
      return notify("Account Details Send");
    });
  };

  return (
    <>
      <ToastContainer />

      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Login</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
              className={"radiogroup"}
            >
              <Radio.Button value="User" className={"radiobutton"}>
                User
              </Radio.Button>
              {/* <Radio.Button value="Doctor" className={"radiobutton"}>
                Doctor
              </Radio.Button> */}
              {/* <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button> */}
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <p>ID - 100</p>
            <p>Password - masai</p>
            <form onSubmit={HandleSubmit}>
              <h3>{placement} Email</h3>
              <input
                type="email"
                name="email"
                value={formvalue.email}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              
              <button type="submit">{Loading ? "Loading..." : "Submit"}</button>
              <p style={{ marginTop: "10px" }}>
  New To Our Site?{" "}
  <span
    style={{ color: "blue", cursor: "pointer" }}
    onClick={() => window.location.href = "http://localhost:3000/adduser"}
  >
    Sign Up here !
  </span>
</p>
              {/* New To Our Site ? 
               <a href="http://localhost:3000/adduser">Sign Up here !</a>  */}
              <p style={{ marginTop: "10px" }}>
                Forget Password?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={showDrawer}
                >
                  Get it on Email !
                </span>
              </p>
              
              {/* ********************************************************* */}
              <Drawer
                title="Forget Password"
                placement="left"
                onClose={onClose}
                open={open}
              >
                {/* <div>
                  <label style={{ fontSize: "18px" }}>Choose Type</label>

                  <select
                    name="type"
                    value={ForgetPassword.type}
                    onChange={HandleForgetPassword}
                    required
                  >
                    <option value="">User Type</option>
                    <option value="User">User</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div> */}
                <div>
                  <label style={{ display: "block", fontSize: "18px" }}>
                    Enter Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    name="emailForgot"
                    value={ForgetPassword.email}
                    onChange={HandleForgetPassword}
                    required
                    style={{
                      width: "100%",
                      height: "3rem",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#bce0fb",
                      fontSize: "18px",
                      marginTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                </div>

                <button
                  style={{
                    width: "50%",
                    margin: " 20px auto",
                    display: "flex",
                    padding: "10px",
                    fontSize: "18px",
                    backgroundColor: "#ff9f9f",
                    border: "none",
                    borderRadius: "7px",
                    cursor: "pointer",
                    justifyContent: "center",
                  }}
                  onClick={HandleChangePassword}
                >
                  {forgetLoading ? "Loading..." : " Send Mail"}
                </button>
              </Drawer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
