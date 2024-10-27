import React, { useState } from 'react';
import { createStudent } from '../services/Api';
import './CreateStudentForm.css';
import authHeader from '../services/authHeader';
import { useNavigate } from 'react-router-dom'; // Import useHistory

const CreateStudentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    name: '',
    password: '',
    emailId: '',
    rollNo: '',
    grade: '',
    motherName: '',
    fatherName: '',
    age: '',
    mobileNumber: '',
    address: { state: '', zipCode: '', city: '' },
    dateOfBirth: '',
    dateOfJoining: '',
    roles: 'STUDENT'
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const [key] = name.split('.').slice(1);
      setFormData(prevData => ({
        ...prevData,
        address: { ...prevData.address, [key]: value }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    // Validation logic if needed
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess('');
      return;
    }

    try {
      const token = authHeader();
      createStudent(formData, token);
      setSuccess('Student created successfully!');
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  const handleClose = () => {
    navigate(-1);
  };


  return (
    <div className="form-container">
      <div
        onClick={handleClose}
        style={{
          cursor: 'pointer',
          color: 'white', // Change color of cross sign
          fontSize: '24px',
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '40px',
          height: '40px',
          borderRadius: '50%', // Circular shape
          backgroundColor: 'red', // Background color of the circle
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'darkred'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'red'}
      >
        &times; {/* Cross sign */}
      </div>
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit} className="form">
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="john_doe"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
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
          <label htmlFor="emailId">Email ID</label>
          <input
            type="email"
            id="emailId"
            name="emailId"
            placeholder="john.doe@example.com"
            value={formData.emailId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rollNo">Roll Number</label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            placeholder="12345"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade</label>
          <input
            type="number"
            id="grade"
            name="grade"
            placeholder="12"
            value={formData.grade}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="motherName">Mother's Name</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            placeholder="Jane Doe"
            value={formData.motherName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fatherName">Father's Name</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            placeholder="John Doe"
            value={formData.fatherName}
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
            placeholder="15"
            value={formData.age}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="+1234567890"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address.state">State</label>
          <input
            type="text"
            id="address.state"
            name="address.state"
            placeholder="Bihar"
            value={formData.address.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address.city">City</label>
          <input
            type="text"
            id="address.city"
            name="address.city"
            placeholder="Arrah"
            value={formData.address.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
        <label htmlFor="address.street">Street</label>
        <input
          type="text"
          id="address.street"
          name="address.street"
          placeholder="Arrah"
          value={formData.address.street}
          onChange={handleChange}
          required
        />
      </div>

        <div className="form-group">
          <label htmlFor="address.zipCode">Zip Code</label>
          <input
            type="text"
            id="address.zipCode"
            name="address.zipCode"
            placeholder="802301"
            value={formData.address.zipCode}
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
          <label htmlFor="dateOfJoining">Date of Joining</label>
          <input
            type="date"
            id="dateOfJoining"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Create Student</button>
      </form>
    </div>
  );
};

export default CreateStudentPage;
