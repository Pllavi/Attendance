import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log('Registration successful:', response.data);
      // Optionally, redirect to another page upon successful registration
      navigate('/')
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="container">
      
      <div className="row justify-content-center">
        
        <div className="col-md-6">
        <h1 className="card-title mt-4">Register</h1>
          <div className="card mt-3">
            <div className="card-body">
              
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;


