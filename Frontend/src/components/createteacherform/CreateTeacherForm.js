// src/components/CreateTeacherPage.js
import React, { useState } from 'react';
import { createTeacher } from '../services/Api';
import '../formstyle/FormStyle.css'; // Ensure this CSS file includes the styles provided below

const CreateTeacherPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    age: '',
    mobile_number: '',
    address: '',
    dateOfBirth: '',
    qualification: '',
    description: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Teacher Created:', formData);
    // Call API to create teacher
    try {
        createTeacher(formData);
        setSuccess('Teacher created successfully!');
        setError('');
      } catch (err) {
        setError(err.message);
        setSuccess('');
      }
  };

  return (
    <div className="form-container">
      <h2>Create Teacher</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="30"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile_number">Mobile Number</label>
          <input
            type="tel"
            id="mobile_number"
            name="mobile_number"
            placeholder="+1234567890"
            value={formData.mobile_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="123 Main St"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            placeholder="PhD in Mathematics"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Describe the teacher"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Create Teacher</button>
      </form>
    </div>
  );
};

export default CreateTeacherPage;

