import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateStudent, getStudentById } from '../services/Api'; // Ensure these imports are correct
import '../formstyle/FormStyle.css'; // Ensure this CSS file includes the styles

const UpdateStudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    rollNo: '',
    className: '', // Adjusted to match the response key
    motherName: '',
    fatherName: '',
    age: '',
    mobileNumber: '',
    parentEmailId: '',
    bloodGroup: '',
    address: '',
    dateOfBirth: '', // Handle null values
    dateOfJoining: ''
  });
  
  const {id} = useParams();
//   console.log('Student ID:', studentId);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Fetch the existing student data when component mounts
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        console.log("fdgdgdg");
        const response = await getStudentById(id); // Use studentId prop
        console.log("Line No. 999");
        console.log(response);
        const data = response;
        console.log("Line No. 33");
        console.log(data);
        console.log(data.firstName);

        // Handle null values
        setFormData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          password: data.password || '',
          email: data.email || '',
          rollNo: data.rollNo || '',
          className: data.classname || '', // Adjusted to match the response key
          motherName: data.motherName || '',
          fatherName: data.fatherName || '',
          age: data.age || '',
          mobileNumber: data.mobileNumber || '',
          parentEmailId: data.parentEmailId || '',
          bloodGroup: data.bloodGroup || '',
          address: data.address || '',
          dateOfBirth: data.dateofBirth || '', // Adjusted to match the response key
          dateOfJoining: data.dateOfJoining || ''
        });
      } catch (err) {
        console.error('Error fetching student data:', err);
        setError('Failed to fetch student data.');
      }
    };
    
    fetchStudentData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      await updateStudent(id, formData);
      setSuccess('Student updated successfully!');
      setError('');
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
          <label htmlFor="className">Class</label>
          <input
            type="text"
            id="className"
            name="className"
            placeholder="10th Grade"
            value={formData.className}
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
          <label htmlFor="parentEmailId">Parent's Email ID</label>
          <input
            type="email"
            id="parentEmailId"
            name="parentEmailId"
            placeholder="parent@example.com"
            value={formData.parentEmailId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            placeholder="A+"
            value={formData.bloodGroup}
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
