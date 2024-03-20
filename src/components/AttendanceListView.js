// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

// function AttendanceList() {
//   const [attendanceList, setAttendanceList] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/attendance')
//       .then((response) => response.json())
//       .then((data) => setAttendanceList(data))
//       .catch((error) => console.error('Error fetching attendance:', error));
//   }, []);

//   return (
//     <div>
//       <h2>Attendance List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Student Name</th>
//             <th>Date</th>
//             <th>Present</th>
//             <th>Actions</th> {/* Changed the header to Actions */}
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceList.map((attendance) => (
//             <tr key={attendance.id}>
//               <td>{attendance.studentName}</td>
//               <td>{attendance.date}</td>
//               <td>{attendance.present ? 'Present' : 'Absent'}</td>
//               <td>
//                 {/* Changed the NavLink to use correct URL */}
//                 <NavLink to={`/attendance/edit/${attendance.id}`}>Edit</NavLink>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AttendanceList;
// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

// function AttendanceList() {
//   const [attendanceList, setAttendanceList] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/attendance')
//       .then((response) => response.json())
//       .then((data) => setAttendanceList(data))
//       .catch((error) => console.error('Error fetching attendance:', error));
//   }, []);

//   // Function to format the date to display only date without time
//   const formatDate = (dateString) => {
//     const dateObj = new Date(dateString);
//     return dateObj.toLocaleDateString(); // Returns date in format MM/DD/YYYY
//   };

//   return (
//     <div className="container">
//     <h2>Attendance List</h2>
//     <div className="table-responsive">
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Student Name</th>
//             <th>Date</th>
//             <th>Present</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceList.map((attendance) => (
//             <tr key={attendance.id}>
//               <td>{attendance.studentName}</td>
//               <td>{formatDate(attendance.date)}</td>
//               <td>{attendance.present ? 'Present' : 'Absent'}</td>
//               <td>
//                 <NavLink to={`/attendance/edit/${attendance.id}`}>Edit</NavLink>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );
// }

// export default AttendanceList;
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from './useAuth'; // Import the useAuth hook
import Home from './Home';

function AttendanceList() {
  const [attendanceList, setAttendanceList] = useState([]);
  const isLoggedIn = useAuth(); // Use the useAuth hook to check login status

  useEffect(() => {
    if (!isLoggedIn) return; // If not logged in, do not fetch attendance data

    fetch('http://localhost:5000/api/attendance')
      .then((response) => response.json())
      .then((data) => setAttendanceList(data))
      .catch((error) => console.error('Error fetching attendance:', error));
  }, [isLoggedIn]);

  // Function to format the date to display only date without time
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString(); // Returns date in format MM/DD/YYYY
  };

  return (
    <div>
    <Home/>
    <div className="container">
      <h2>Attendance List</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Date</th>
              <th>Present</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceList.map((attendance) => (
              <tr key={attendance.id}>
                <td>{attendance.studentName}</td>
                <td>{formatDate(attendance.date)}</td>
                <td>{attendance.present ? 'Present' : 'Absent'}</td>
                <td>
                  <NavLink to={`/attendance/edit/${attendance.id}`}>Edit</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default AttendanceList;
