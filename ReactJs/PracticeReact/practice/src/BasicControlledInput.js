import React, { useState } from 'react';

const BasicControlledInput = () => {
    const [inputValue, setInputValue] = useState(``);
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            <h2>Basic Controlled Input Example 1</h2>
            <input
                type="text"
                placeholder="Type Something..."
                value={inputValue}
                onChange={handleChange}
            />
            <p>You Typed: {inputValue}</p>
        </div>
    );
};

export default BasicControlledInput
