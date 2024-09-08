import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import { getTeacherById, updateTeacher } from '../services/Api'; // Import API functions
import '../formstyle/FormStyle.css'; // Ensure this CSS file includes the styles

const UpdateTeacherForm = () => {
  const { id } = useParams(); // Get ID from URL parameters
  console.log("gdgdgdgd");
  console.log(id);
  const navigate = useNavigate(); // For navigation
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

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        console.log(id);
        const response = await getTeacherById(id); // Fetch teacher data by ID
        console.log("Line No. 29")
        setFormData(response.data);
      } catch (err) {
        console.error('Error fetching teacher data:', err);
        setError('Failed to fetch teacher data.');
      }
    };

    fetchTeacherData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTeacher(id, formData); // Update teacher data by ID
      setSuccess('Teacher updated successfully!');
      setError('');
      navigate('/admin/teachers'); // Redirect to teachers list or any other page
    } catch (err) {
      setError('Failed to update teacher.');
      setSuccess('');
    }
  };

  return (
    <div className="form-container">
      <h2>Update Teacher</h2>
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
            id="description"
            name="description"
            placeholder="Describe the teacher"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Update Teacher</button>
      </form>
    </div>
  );
};

export default UpdateTeacherForm;
