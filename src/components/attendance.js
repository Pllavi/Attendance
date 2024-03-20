import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth'; // Import the useAuth hook
import Home from './Home';

function AttendanceForm() {
  const [studentName, setStudentName] = useState('');
  const [date, setDate] = useState(new Date()); // Initialize date with current date
  const [present, setPresent] = useState(true); // Default to present
  const navigate = useNavigate();
  const isLoggedIn = useAuth(); // Use the useAuth hook to check login status

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentName, date, present }),
      });
      const data = await response.json();
      console.log('Attendance marked successfully:', data);
      // Optionally, show a success message or redirect to another page
    } catch (error) {
      console.error('Error marking attendance:', error);
      // Handle error, show error message, etc.
    }
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
      <h2>Mark Attendance</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Student Name:</label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          {/* Replace input type="date" with the Calendar component */}
          <Calendar className="form-control" onChange={setDate} value={date} />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="present"
            checked={present}
            onChange={(e) => setPresent(e.target.checked)}
          />
          <label htmlFor="present" className="form-check-label">Present:</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    
    </div>
  );
}

export default AttendanceForm;











// function AttendanceForm() {
//   const [studentName, setStudentName] = useState('');
//   const [date, setDate] = useState('');
//   const [present, setPresent] = useState(true); // Default to present

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/attendance', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ studentName, date, present }),
//       });
//       const data = await response.json();
//       console.log('Attendance marked successfully:', data);
//       // Optionally, show a success message or redirect to another page
//     } catch (error) {
//       console.error('Error marking attendance:', error);
//       // Handle error, show error message, etc.
//     }
//   };

//   return (
//     <div>
//       <h2>Mark Attendance</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="studentName">Student Name:</label>
//           <input
//             type="text"
//             id="studentName"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="date">Date:</label>
//           <input
//             type="date"
//             id="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="present">Present:</label>
//           <input
//             type="checkbox"
//             id="present"
//             checked={present}
//             onChange={(e) => setPresent(e.target.checked)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default AttendanceForm;

