import React from 'react';

const handleChange = (e) => {
    console.log("Entering password...");
}

const Keypad = () => {
    return (
        <div>
            <input 
            type="password" 
            placeholder="Enter Password"
            onChange={handleChange}
            />
        </div>
    )
}

export default Keypad;