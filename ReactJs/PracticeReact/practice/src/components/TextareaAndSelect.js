import React,{useState} from 'react'

const TextareaAndSelect = () => {
    const [formState, setFormState] = useState({
        description:'',
        category:''
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]:value
        });
    }
  return (
    <div>
      <form autoComplete="off">
      <h2>Controlled Textarea and Select Example 3</h2>
      
      <textarea 
      name="description" 
      placeholder="Write a description"
      value={formState.description}
      onChange={handleChange}
      />
      <br />
      <select
      name="category"
      placeholder="Select a category"
      value={formState.category}
      onChange={handleChange}
      >
        <option value="">Select Category...</option>
        <option value="Tech">Tech</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Education">Education</option>
      </select>
      <p>Description: {formState.description}</p>
      <p>Selected Category: {formState.category}</p>
      </form>
    </div>
  );
};

export default TextareaAndSelect;
