import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudent, getStudentById } from '../services/Api'; // Ensure these imports are correct
import './CreateStudentForm.css'; // Ensure this CSS file includes the styles

const UpdateStudentForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    name: '',
    password: '',
    emailId: '',
    rollNo: '',
    grade: '', // Default grade
    motherName: '',
    fatherName: '',
    age: '',
    mobileNumber: '',
    address: { state: '', zipCode: '', city: '' },
    dateOfBirth: '',
    dateOfJoining: '',
    roles: 'STUDENT' // Default role
  });
  
  const {userId} = useParams();
//   console.log('Student ID:', studentId);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('address.')) {
      const [key] = name.split('.').slice(1); // Remove 'address' from name
      setFormData(prevData => ({
        ...prevData,
        address: { ...prevData.address, [key]: value }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  
  // Fetch the existing student data when component mounts
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await getStudentById(userId); // Use studentId prop
        const data = response.data;

        // Handle null values
        setFormData({
          userName: data.userName || '',
          name: data.name || '',
          password: data.password || '',
          emailId: data.emailId || '',
          rollNo: data.rollNo || '',
          grade: data.grade || '', 
          motherName: data.motherName || '',
          fatherName: data.fatherName || '',
          age: data.age || '',
          mobileNumber: data.mobileNumber || '',
          parentEmailId: data.parentEmailId || '',
          bloodGroup: data.bloodGroup || '',
          address: data.address || '',
          dateOfBirth: data.dateofBirth || '', 
          dateOfJoining: data.dateOfJoining || '',
          roles: 'STUDENT'
        });
      } catch (err) {
        console.error('Error fetching student data:', err);
        setError('Failed to fetch student data.');
      }
    };
    
    fetchStudentData();
  }, [userId]);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const validateForm = () => {
    // Add validation logic if needed
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess('');
      return;
    }
    
    try {
      await updateStudent(userId, formData);
      setSuccess('Student updated successfully!');
      setError('');
      navigate(-1);
    } catch (err) {
      setError('Failed to update student.');
      setSuccess('');
    }
  };

  return (
    <div className="form-container">
    <h2>Update Student</h2>
    <form onSubmit={handleSubmit} className="form">
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="JohnDoe"
          value={formData.userName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
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
          type="text"
          id="grade"
          name="grade"
          placeholder="10th Grade"
          value={formData.grade}
          onChange={handleChange}
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
          required
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
      <button type="submit" className="submit-button">Update Student</button>
    </form>
  </div>
  
  );
};

export default UpdateStudentForm;
