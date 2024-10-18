// src/components/CustomInput.js
import React from 'react';
import { useFormContext } from 'react-hook-form';

const CustomInput = ({ name, label, type, validation }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register(name, validation)} // Connect input to form with validation
      />
      {errors[name] && <p>{errors[name].message}</p>} {/* Display error message */}
    </div>
  );
};

export default CustomInput;
