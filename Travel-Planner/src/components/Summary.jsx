// src/components/Summary.jsx
import React from 'react';

const Summary = ({ trip }) => {
  if (!trip) return null;

  return (
    <div>
      <h2>Trip Summary</h2>
      <p><strong>Destination:</strong> {trip.destination}</p>
      <p><strong>Start Date:</strong> {trip.startDate}</p>
      <p><strong>End Date:</strong> {trip.endDate}</p>
    </div>
  );
};

export default Summary;
