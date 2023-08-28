import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useParams , Link} from 'react-router-dom';
import axios from 'axios';

const ViewProfile = () => {
  const { user_id } = useParams(); // Obtain the user ID from URL parameter
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, [user_id]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/${user_id}`); // Replace with your backend URL
      const userData = response.data;
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <Container className="p-4">
      <h2 className="text-center">Welcome , {sessionStorage.getItem('firstName')}</h2>
      {user && (
        <Row className="justify-content-center">
          <Col md={8}>
            <Table striped bordered hover>
              <tbody>
                <tr style={{display:'none'}}>
                  <td><strong>User ID:</strong></td>
                  <td>{user.userId}</td>
                </tr>
                <tr>
                  <td><strong>First Name:</strong></td>
                  <td>{user.firstName}</td>
                </tr>
                <tr>
                  <td><strong>Last Name:</strong></td>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <td><strong>Mobile:</strong></td>
                  <td>{user.mobile}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td><strong>Date of Birth:</strong></td>
                  <td>{user.dob}</td>
                </tr>
                <tr style={{display:'none'}}>
                  <td><strong>Role:</strong></td>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            </Table>
            <div className="text-center">
              <Link to={`/UpdateProfile/${user_id}`} className="btn btn-primary">
                Update Profile
              </Link>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ViewProfile;
