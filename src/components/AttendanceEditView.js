// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import useAuth from './useAuth'; // Import the useAuth hook

// function AttendanceEditView() {
//   const { id } = useParams();
//   const [attendanceData, setAttendanceData] = useState({});
//   const [editedStatus, setEditedStatus] = useState('');
//   const navigate = useNavigate();
//   const isLoggedIn = useAuth(); // Use the useAuth hook to check login status

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/attendance/${id}`)
//       .then(response => {
//         setAttendanceData(response.data);
//         // Set initial value for status field based on previous attendance
//         setEditedStatus(response.data.present ? 'Present' : 'Absent');
//       })
//       .catch(error => {
//         console.error('Error fetching attendance record:', error);
//       });
//   }, [id]);

//   const handleEditAttendance = (e) => {
//     e.preventDefault();
    
//     const updatedPresent = editedStatus === 'Present';
  
//     axios.put(`http://localhost:5000/api/attendance/${id}`, { studentName: attendanceData.studentName, date: attendanceData.date, present: updatedPresent })
//       .then(response => {
//         console.log('Attendance record updated successfully:', response.data);
//         // Optionally, you can perform additional actions upon successful update
//       })
//       .catch(error => {
//         console.error('Error updating attendance record:', error);
//         // Log the detailed error message for debugging purposes
//         console.error('Detailed error:', error.response.data);
//         // Handle the error appropriately (e.g., display an error message to the user)
//       });
//   };

//   // Redirect to login page if not logged in
//   if (!isLoggedIn) {
//     navigate('/login');
//     return null; // Prevent rendering the form if not logged in
//   }

//   return (
//     <div>
//       <h1>Edit Attendance Record</h1>
//      <p>StudentName : {attendanceData.studentName}</p>
//       <p>Date: {new Date(attendanceData.date).toLocaleDateString()}</p>
//       <form onSubmit={handleEditAttendance}>
//         <label>Status:</label>
//         <select value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
//           <option value="Present">Present</option>
//           <option value="Absent">Absent</option>
//         </select>
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// }

// export default AttendanceEditView;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import Home from './Home';

function AttendanceEditView() {
  const { id } = useParams();
  const [attendanceData, setAttendanceData] = useState({});
  const [editedStatus, setEditedStatus] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = useAuth(); // Use the useAuth hook to check login status

  useEffect(() => {
    axios.get(`http://localhost:5000/api/attendance/${id}`)
      .then(response => {
        setAttendanceData(response.data);
        // Set initial value for status field based on previous attendance
        setEditedStatus(response.data.present ? 'Present' : 'Absent');
      })
      .catch(error => {
        console.error('Error fetching attendance record:', error);
      });
  }, [id]);

  const handleEditAttendance = (e) => {
    e.preventDefault();
    
    const updatedPresent = editedStatus === 'Present';
  
    axios.put(`http://localhost:5000/api/attendance/${id}`, { studentName: attendanceData.studentName, date: attendanceData.date, present: updatedPresent })
      .then(response => {
        console.log('Attendance record updated successfully:', response.data);
        navigate('/viewlist');
      })
      .catch(error => {
        console.error('Error updating attendance record:', error);
        // Log the detailed error message for debugging purposes
        console.error('Detailed error:', error.response.data);
        // Handle the error appropriately (e.g., display an error message to the user)
      });
  };

  // Redirect to login page if not logged in
  if (!isLoggedIn) {
    navigate('/login');
    return null; // Prevent rendering the form if not logged in
  }

  return (
    <div>
      <Home/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h1 className="card-title mt-4">Edit Attendance Record</h1>
          <div className="card">
            <div className="card-body">
             
              <p className="card-text">Student Name: {attendanceData.studentName}</p>
              <p className="card-text">Date: {new Date(attendanceData.date).toLocaleDateString()}</p>
              <form onSubmit={handleEditAttendance}>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">Status:</label>
                  <select id="status" className="form-select" value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AttendanceEditView;
