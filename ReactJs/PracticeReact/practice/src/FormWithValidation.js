import React, { useState } from 'react';

// This component creates a form with validation for username and password
const FormWithValidation = () => 
{
  // useState is a React hook that allows us to add state to functional components
  // Here, we're creating two state variables: formData and errors
  // formData will store the user's input, while errors will store any validation errors
  const [formData, setFormData] = useState({username: "", password: ""});
  const [errors, setErrors] = useState({username: "", password: ""});

  // This function is called every time the user types in an input field
  const handleChange = (event) =>{
    // We extract the name and value from the input that triggered the event
    const {name, value} = event.target;
    // We update the formData state, keeping all existing data and only changing the field that was modified
    // The [name] syntax allows us to use a variable as an object key
    setFormData({...formData, [name]:value});
  };

  // This function checks if the form data is valid
  const validate = () =>{
    let formErrors = {};
    // If the username is less than 5 characters, we add an error message
    if(formData.username.length < 5){
      formErrors.username = "Username must be at least 5 characters";
    }
    // If the password is less than 8 characters, we add an error message
    if(formData.password.length < 8){
      formErrors.password = "Password must be at least 8 characters";
    }
    // We update the errors state with any validation errors we found
    setErrors(formErrors);
    // We return true if there are no errors, false otherwise
    return Object.keys(formErrors).length === 0;
  };

  // This function is called when the form is submitted
  const handleSubmit = (event) => {
    // We prevent the default form submission behavior
    event.preventDefault();
    // We call the validate function to check if the form data is valid
    if(validate()){
      // If the data is valid, we show an alert
      alert("Form submitted successfully");
    }
  };

  // This is the JSX that will be rendered
  return(
    <div>
      <h2>Controlled Form Validation Example</h2>
      <h2>Login Form Validation</h2>
      {/* The onSubmit prop specifies what happens when the form is submitted */}
      <form autoComplete="off" onSubmit = {handleSubmit}>
        {/* Each input has a value prop (controlled by React) and an onChange prop to handle changes */}
        <input 
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="User Name.."
        /> <br />
        {/* We display any username errors here */}
        <small style={{color:'red'}} >{errors.username}</small> <br />
        <input 
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
        placeholder="Password.."
        /> <br />
        {/* We display any password errors here */}
        <small style={{color:'red'}}>{errors.password}</small> <br />
        {/* The submit button triggers the form submission */}
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};   
export default FormWithValidation;