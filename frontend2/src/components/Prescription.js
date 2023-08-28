import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Prescription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [prescriptionData, setPrescriptionData] = useState({
    symptoms: '',
    diagnosis: '',
    appmt_id: new URLSearchParams(location.search).get('appmt_id') || 0,
  });

  const handleAddPrescription = async () => {
    try {
      const response = await axios.post('http://localhost:8080/prescription', prescriptionData);
      // Handle success
      alert(response.data.message);
      // Clear input fields for next entry
      setPrescriptionData({ symptoms: '', diagnosis: '', appmt_id: 0 });
    } catch (error) {
      // Handle error
      console.error('Error adding prescription:', error);
      alert('Failed to add prescription.');
    }
  };

  const handleGetPrescription = () => {
    navigate('/GetPrescription');
  };

  return (
    <div className="container my-5">
      <h3 className="text-center">Prescription</h3>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Symptoms"
                value={prescriptionData.symptoms}
                onChange={(e) => setPrescriptionData({ ...prescriptionData, symptoms: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Diagnosis"
                value={prescriptionData.diagnosis}
                onChange={(e) => setPrescriptionData({ ...prescriptionData, diagnosis: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Appointment ID"
                value={prescriptionData.appmt_id}
                onChange={(e) => setPrescriptionData({ ...prescriptionData, appmt_id: e.target.value })}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddPrescription}
              >
                Add Prescription
              </button>
              {/* <button
                type="button"
                className="btn btn-secondary"
                onClick={handleGetPrescription}
              >
                Get Prescription
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
