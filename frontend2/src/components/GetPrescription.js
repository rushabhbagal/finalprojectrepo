// import React, { useState } from 'react';
// import axios from 'axios';

// const GetPrescription = () => {
//   const [appmtId, setAppmtId] = useState('');
//   const [prescriptionData, setPrescriptionData] = useState(null);

//   const handleGetPrescription = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/prescription/${appmtId}`);
//       setPrescriptionData(response.data);
//     } catch (error) {
//       console.error('Error getting prescription:', error);
//       alert('Failed to get prescription.');
//     }
//   };

//   return (
//     <div className="container my-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <h3 className="text-center">Get Prescription</h3>
//           <div className="mb-3">
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Enter Appointment ID"
//               value={appmtId}
//               onChange={(e) => setAppmtId(e.target.value)}
//             />
//           </div>
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={handleGetPrescription}
//           >
//             Get Prescription
//           </button>

//           {prescriptionData && (
//             <div className="mt-4">
//               <h4>Prescription Data</h4>
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th>Symptoms</th>
//                     <th>Diagnosis</th>
//                     {/* Add more table headers if needed */}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>{prescriptionData.symptoms}</td>
//                     <td>{prescriptionData.diagnosis}</td>
//                     {/* Add more table cells for other prescription data */}
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetPrescription;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

const GetPrescription = () => {
  const location = useLocation();
  const appmt_id = new URLSearchParams(location.search).get('appmt_id'); // Get appmt_id from query parameter

  const [prescription, setPrescription] = useState({});

  useEffect(() => {
    // Fetch prescription data when the component mounts
    fetchPrescriptionData();
  }, [appmt_id]);

  const fetchPrescriptionData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/prescription/${appmt_id}`);
      setPrescription(response.data);
    } catch (error) {
      console.error('Error fetching prescription:', error);
    }
  };

  return (
    <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
      <h2>Prescription</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Symptoms</th>
            <th scope="col">Diagnosis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{prescription.symptoms}</td>
            <td>{prescription.diagnosis}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default GetPrescription;

