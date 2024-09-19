import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import { getTeacherById, updateTeacher } from '../services/Api'; // Import API functions
import '../formstyle/FormStyle.css'; // Ensure this CSS file includes the styles

const UpdateTeacherForm = () => {
  const { userId } = useParams(); // Get ID from URL parameters
  console.log("gdgdgdgd");
  console.log(userId);
  const navigate = useNavigate(); // For navigation
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    emailId: '',
    age: '',
    roles:"student",
    mobileNumber: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    },
    qualification: '',
    description: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        console.log(userId);
        const response = await getTeacherById(userId); // Fetch teacher data by ID
        console.log("Line No. 29")
        setFormData(response.data.data);
      } catch (err) {
        console.error('Error fetching teacher data:', err);
        setError('Failed to fetch teacher data.');
      }
    };

    fetchTeacherData();
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTeacher(userId, formData); // Update teacher data by ID
      setSuccess('Teacher updated successfully!');
      setError('');
      // navigate('/admin/teachers'); // Redirect to teachers list or any other page
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
