import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import AttendanceListView from "./components/AttendanceListView";
import AttendanceEditView from "./components/AttendanceEditView";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import AttendanceForm from "./components/attendance";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <BrowserRouter basename="/Attendance">

      
      
        <Routes>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/" element={<Login />}></Route>
          <Route path="/attendance" element={<AttendanceForm />}></Route>
          
         
          
         
          <Route path="/viewlist" element={<AttendanceListView/>}></Route>
          
        
          <Route path="/attendance/edit/:id" element={<AttendanceEditView />} />
        
        </Routes>
      </BrowserRouter>
    </>
    
   
  );
}

export default App;
