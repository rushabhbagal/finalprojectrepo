import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userService from '../Services/user.service';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword,setNewPassword]=useState('');
   const [otp, setOtp] = useState('');


                                                                                           ///////for OTP////////////////////////

  const sendOTP = (p) => {
debugger
    p.preventDefault();
    
    userService.createOTP(email)
          .then((email)=>{
         toast.success("plz check OTP code in ur email")
            console.log('mail success',email.data)

          })
          .catch((error)=>{
           toast.error("plz enter valid emailID")
            console.log("something went wrong",error.response)
          })

  
  };


                          ///verifyotp///

  const confirmOTP=(c)=>{
    c.preventDefault();
const verifyotpobj={
  otp,
  email
}
  
    userService.verifyOTP(verifyotpobj)
    .then((verifyotpobj)=>{
    toast.success("OTP confirmed")
      console.log('OTP confirmed successfully',verifyotpobj.data)

    })
    .catch((error)=>{
    toast.error("  plz re-enter OTP ")
      console.log("something went wrong",error.response)
    })
    

  }


  const saveforgot=(p)=>{
    p.preventDefault();

    const saveforgorObject={
      email,
      newPassword

    }


    userService.adddchangedpass(saveforgorObject)
    .then((saveforgorObject)=>{
    toast.success("password changed successfully")
      console.log('password changed successfully',saveforgorObject.data)

    })
    .catch((error)=>{
    toast.error("OldPassword doesn't matched")
      console.log("something went wrong",error.response)
    })


  }


  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
    <div className="card shadow p-4" style={{ width: '400px' }}>
      <div className="card-body">
        <h4 className="card-title">Forgot Password</h4>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              id="email"
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button 
            type="button"
            className="btn btn-primary btn-block btn-md" 
            onClick={(p) => sendOTP(p)}
          >
            Send OTP
          </button>
  
          <div className="mb-3">
            <label htmlFor="otp">OTP:</label>
            <input
              id="otp"
              type="text"
              className="form-control"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block btn-md"
            onClick={(c) => confirmOTP(c)}
          >
            Verify OTP
          </button>
          <div className="form-group">
            <label>New Password:</label>
            <input
              className="form-control"
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-success btn-block"
            onClick={(p) => saveforgot(p)}
          >
            Change Password
          </button>
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default ForgotPassword;