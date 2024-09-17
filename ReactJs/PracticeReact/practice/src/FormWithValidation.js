import React, { useState } from 'react';

// Controlled form with validation logic
const FormWithValidation = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  // Validation logic
  const validate = () => {
    let tempErrors = {};
    if (formData.username.length < 5) {
      tempErrors.username = 'Username must be at least 5 characters';
    }
    if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h2>Controlled Form with Validation Example 4</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <p style={{ color: 'red' }}>{errors.username}</p>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <p style={{ color: 'red' }}>{errors.password}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormWithValidation;
