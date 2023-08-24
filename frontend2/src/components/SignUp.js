// import React from 'react';
// import { Link, useHistory} from "react-router-dom";
// //import { Link } from "react-router-dom";
//  import { useState } from "react";
// import { toast } from "react-toastify";
// //import config from "../../config";
// import axios from "axios";

// //function SignUp() {
// const SignUp = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [dob, setDob] = useState("");
//     const [gender, setGender] = useState("");
//     const [role, setRole] = useState(''); // Track selected role
//     const history = useHistory(); // Use React Router's useHistory hook
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const signupUser = () => {
//       // ... your signupUser logic ...
//     };
// const handleRoleChange = (event) => {
//   setRole(event.target.value);
// };

// const handleSignUp = (event) => {
//   event.preventDefault();

//   if (role === 'patient') {
//     history.push('/SignIn'); // Redirect to SignIn.js for patients
//   } else if (role === 'doctor') {
//     history.push('/Dr_SignUp'); // Redirect to Dr_SignUp.js for doctors
//   }
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   // ... Handle form submission, including the selected role
// };
// return (
//     <div className='sign-up'>
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title text-center mb-4">Sign Up</h2>
//               <form onSubmit={handleSignUp}>
//               {/* <form> */}
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="First Name"
//                     required
//                    onChange={(event) => setFirstName(event.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Last Name"
//                     onChange={(event) => setLastName(event.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Mobile"
//                     required
//                     onChange={(event) => setMobile(event.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                 <label className="form-label">DOB</label>
//                   <br></br>
//                   <input
//                     type="date"
//                     className="form-control"
//                     placeholder="DOB"
//                     required
//                     onChange={(event) => setDob(event.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//   <label className="form-label">Gender</label>
//   <br></br>
//   <div className="form-check form-check-inline">
//     <input
//       type="radio"
//       className="form-check-input"
//       value="Male"
//       name="gender"
//       required
//       onChange={(event) => setGender(event.target.value)}
//     />
//     <label className="form-check-label">Male</label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       type="radio"
//       className="form-check-input"
//       value="Female"
//       name="gender"
//       onChange={(event) => setGender(event.target.value)}
//     />
//     <label className="form-check-label">Female</label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       type="radio"
//       className="form-check-input"
//       value="Other"
//       name="gender"
//       onChange={(event) => setGender(event.target.value)}
//     />
//     <label className="form-check-label">Other</label>
//   </div>
// </div>
// <div className="mb-3">
//                   <label htmlFor="role" className="form-label">
//                     Role
//                   </label>
//                   <select
//                     className="form-select"
//                     id="role"
//                     value={role}
//                     onChange={handleRoleChange}
//                     required
//                   >
//                     <option value="">Select a role</option>
//                     <option value="patient">Patient</option>
//                     <option value="doctor">Doctor</option>
//                   </select>
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Email address"
//                     required
//                     onChange={(event) => setEmail(event.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     required
//                     onChange={(event) => setPassword(event.target.value)}
//                   />
//                 </div>
//                 <div className="text-center">
//                 <button className="btn btn-primary btn-lg" type="submit">
//                     Sign Up
//                   </button>
//                 </div>
//               </form>
//               <div className="mt-3 text-center">
//                 Already have an account? <Link to="/signin">Sign In</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SignUp;










// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Card, Form } from 'react-bootstrap';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useHistory } from 'react-router-dom';

// const SignUp = () => {
//   const history = useHistory();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobile, setMobileNo] = useState('');
//   const [dob, setDOB] = useState('');
//   const [role, setRole] = useState(''); // Default role is 'patient'

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleMobileNoChange = (event) => {
//     setMobileNo(event.target.value);
//   };

//   const handleDOBChange = (event) => {
//     setDOB(event.target.value);
//   };

//   const handleRoleChange = (event) => {
//     const selectedRole = event.target.value;
//     if (selectedRole === "Patient") {
//       setRole("USER");
//     } else if (selectedRole === "Doctor") {
//       setRole("DOCTOR");
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const requestData = {
//       email,
//       password,
//       firstName,
//       lastName,
//       mobile,
//       dob,
//       role,
//     };

//     axios
//       .post('http://localhost:8080/users', requestData) // Replace with your backend API URL
//       .then((response) => {
//         // Handle successful sign-up
//         toast.success('Sign-up successful! You can now log in.'); // If you're using a notification library like 'react-toastify'
//         if (role === 'USER') {
//           history.push('/SignIn');
//         } else if (role === 'DOCTOR') {
//           history.push('/Dr_SignUp');
//         }
//       })
//       .catch((error) => {
//         // Handle sign-up error
//         toast.error('Sign-up failed. Please try again.'); // If you're using a notification library like 'react-toastify'
//         console.error('Sign-up Error:', error);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-4">
//           <Card>
//             <Card.Body>
//               <Card.Title className="text-center mb-4">Sign Up</Card.Title>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="firstName">
//                   <Form.Control
//                     type="text"
//                     placeholder="First Name"
//                     value={firstName}
//                     onChange={handleFirstNameChange}
//                   />
//                   <br></br>
//                 </Form.Group>
//                 <Form.Group controlId="lastName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Last Name"
//                     value={lastName}
//                     onChange={handleLastNameChange}
//                   />
//                 </Form.Group>
//                 <br></br>
//                 <Form.Group controlId="mobile">
//                   <Form.Control
//                     type="text"
//                     placeholder="Mobile Number"
//                     value={mobile}
//                     onChange={handleMobileNoChange}
//                   />
//                 </Form.Group>
//                 <br></br>
//                 <Form.Group controlId="email">
//                   <Form.Control
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={handleEmailChange}
//                   />
//                 </Form.Group>
//                 <br></br>
//                 <Form.Group controlId="password">
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                   />
//                 </Form.Group>
//                 <br></br>
//                 <Form.Group controlId="dob">
//                 <Form.Label>DOB</Form.Label> 
//                   <Form.Control
//                     type="date"
//                     placeholder="Date of Birth"
//                     value={dob}
//                     onChange={handleDOBChange}
//                   />
//                 </Form.Group>
//                 <br></br>
//                 <Form.Group controlId="role">
//                 <Form.Label>Role</Form.Label> 
//                   <Form.Control
//                     as="select"
//                     value={role}
//                     onChange={handleRoleChange}
//                   >
//                     <option value="">Select a role</option>
//                     <option value="Patient">Patient</option>
//                     <option value="Doctor">Doctor</option>
//                   </Form.Control>
//                 </Form.Group>
//                 <br></br>
//                 <div className="text-center">
//                   <Button variant="primary" type="submit">
//                     Sign Up
//                   </Button>
//                 </div>
//               </Form>
//               <div className="mt-3 text-center">
//                 Already have an account? <Link to="/signin">Sign In</Link>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
