import React, { useState } from 'react';

const MultipleControlledInputs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastname: '',
        email: ''
    });
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    };
  return (
    <div>
      <h2>Multiple Controlled Input Example 2</h2>
      <form autoComplete="off">
        <div>
            
            <input type="text" id="firstName" name="firstName" placeholder='First Name...' value={formData.firstName} onChange={handleChange} /> <br /> <br />      
            
            <input type="text" id="lasttName" name="lastName" placeholder='Last Name...' value={formData.lastName} onChange={handleChange} /> <br /> <br />
            
            <input type="email" id="email" name="email" placeholder='Email...' value={formData.email} onChange={handleChange} /> <br />
        </div>
      </form>
      <p>First Name: {formData.firstName}</p>  
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default MultipleControlledInputs;


/*The square brackets `[]` around `name` in line 16 are used for computed property names in JavaScript objects. Here's a brief explanation:

```javascript:ReactJs/PracticeReact/practice/src/MultipleControlledInputs.js
setFormData({
  ...formData,
  [name]: value // This line uses computed property names
});
```

The square brackets `[]` allow you to use a variable as a property name in an object literal. In this case, `name` is a variable that contains the name of the input field (either "name" or "email").

This syntax dynamically sets the property of the object based on the `name` attribute of the input that triggered the change event. It's equivalent to writing:

```javascript
if (name === 'name') {
  setFormData({ ...formData, name: value });
} else if (name === 'email') {
  setFormData({ ...formData, email: value });
}
```

But using `[name]` makes the code more flexible and reusable, allowing it to work with any number of input fields without modification. 
*/