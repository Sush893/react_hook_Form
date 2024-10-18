// src/components/Form.js
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import CustomInput from './CustomInput';
import axios from 'axios';

const Form = () => {
  const methods = useForm(); // Initialize React Hook Form methods
  const navigate = useNavigate(); // Initialize useNavigate to handle navigation

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:5000/api/forms', data);
      console.log(response.data); // Handle successful form submission

      // Redirect to the new page and pass the form data using state
      navigate('/submitted-details', { state: { formData: data } });
    } catch (error) {
      console.error(error);
      alert('Form submission failed!');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CustomInput
          name="name"
          label="Name"
          type="text"
          validation={{
            required: 'Name is required',
            minLength: { value: 3, message: 'Name must be at least 3 characters long' }
          }}
        />
        <CustomInput
          name="email"
          label="Email"
          type="email"
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address'
            }
          }}
        />
        <CustomInput
          name="password"
          label="Password"
          type="password"
          validation={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters long' }
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Form;
