// import React, { useState } from 'react';
// import { Button, Container, Row, Col, Form } from 'react-bootstrap';

// const UpdateProfile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [profilePhoto, setProfilePhoto] = useState(null);

//   const handleProfilePhotoChange = (event) => {
//     const selectedPhoto = event.target.files[0];
//     setProfilePhoto(selectedPhoto);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform update logic here
//     console.log('Updated Profile:', { firstName, lastName, email, password, profilePhoto });
//   };

//   return (
//     <Container className="p-4">
//       <h2 className="text-center">Update Profile</h2>
//       <Row className="justify-content-center">
//         <Col md={6} lg={4}>
//           <div className="card">
//             <div className="card-body">
//               <Form>
//                 <div className="mb-3">
//                   {/* <label className="form-label">First Name</label> */}
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter your first name"
//                     value={firstName}
//                     onChange={(event) => setFirstName(event.target.value)}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   {/* <label className="form-label">Last Name</label> */}
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter your last name"
//                     value={lastName}
//                     onChange={(event) => setLastName(event.target.value)}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   {/* <label className="form-label">Email</label> */}
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(event) => setEmail(event.target.value)}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   {/* <label className="form-label">Password</label> */}
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   {/* <label className="form-label">Profile Photo</label> */}
//                   <input
//                     type="file"
//                     accept=".jpg, .jpeg, .png"
//                     className="form-control"
//                     onChange={handleProfilePhotoChange}
//                   />
//                 </div>

//                 <div className="text-center">
//                   <Button variant="primary" onClick={handleSubmit}>
//                     Update Profile
//                   </Button>
//                 </div>
//               </Form>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default UpdateProfile;

import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const UpdateProfile = () => {
  const { user_id } = useParams(); // Obtain the user ID from URL parameter
  const [userId, setUserId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const history = useHistory();
  
  //const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, [user_id]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/${user_id}`); // Replace with your backend URL
      const userData = response.data;
      setUserId(userData.userId);
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setMobile(userData.mobile);
      setEmail(userData.email);
      setDob(userData.dob);
      setRole(userData.role);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // const handleProfilePhotoChange = (event) => {
  //   const selectedPhoto = event.target.files[0];
  //   setProfilePhoto(selectedPhoto);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Prepare updated data
    const updatedData = {
      userId,
      firstName,
      lastName,
      mobile,
      email,
      password,
      dob,
      role,
      //profilePhoto,
    };

    try {
      // Send updated data to the backend
      await axios.put('http://localhost:8080/users', updatedData); // Replace with your backend URL
      console.log('Profile updated successfully');
      history.push(`/ViewProfile/${user_id}`);
        window.location.reload() ;
    } catch (error) {
      console.error('Error updating profile:', error);
        window.location.reload() ;
    }
  };

  return (
    <Container className="p-4">
      <h2 className="text-center">Update Profile</h2>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <div className="card">
            <div className="card-body">
              <Form>
              <div className="mb-3" hidden>
                  <input
                    type="text"
                    value={userId}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="mobile number"
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    value={email}
                    readOnly
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="mb-3" hidden>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>

                <div className="mb-3" hidden>
                  <input
                    type="date"
                    className="form-control"
                    value={dob}
                    onChange={(event) => setDob(event.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your role"
                    value={role}
                    readOnly
                    onChange={(event) => setRole(event.target.value)}
                  />
                </div>

                {/* <div className="mb-3">
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="form-control"
                    onChange={handleProfilePhotoChange}
                  />
                </div> */}

                <div className="text-center">
                  <Button variant="primary" onClick={handleSubmit}>
                    Update Profile
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateProfile;
