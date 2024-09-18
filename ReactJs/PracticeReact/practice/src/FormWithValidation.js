import React, { useState } from 'react';

const FormWithValidation = () => 
{
  const [formData, setFormData] = useState({username: "", password: ""});
  const [errors, setErrors] = useState({username: "", password: ""});

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setFormData({...formData, [name]:value});
  };

  const validate = () =>{
    let formErrors = {};
    if(formData.username.length < 5){
      formErrors.username = "Username must be at least 5 characters";
    }
    if(formData.password.length < 8){
      formErrors.password = "Password must be at least 8 characters";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validate()){
      alert("Form submitted successfully");
    }
  };

  return(
    <div>
      <h2>Controlled Form Validation Example</h2>
      <h2>Login Form Validation</h2>
      <form autoComplete="off" onSubmit = {handleSubmit}>
        <input 
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="User Name.."
        /> <br />
        <small style={{color:'red'}} >{errors.username}</small> <br />
        <input 
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
        placeholder="Password.."
        /> <br />
        <small style={{color:'red'}}>{errors.password}</small> <br />
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};   
export default FormWithValidation;