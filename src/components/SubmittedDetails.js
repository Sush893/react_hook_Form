// src/components/SubmittedDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // useLocation to access passed data

const SubmittedDetails = () => {
  const location = useLocation(); // Access location to get the passed state
  const { formData } = location.state || {}; // Extract form data from the state

  return (
    <div>
      <h1>Submitted Details</h1>
      {formData ? (
        <div>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong> {formData.password}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default SubmittedDetails;
