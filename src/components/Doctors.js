// src/components/Doctors.js
import React from 'react';
import './Doctors.css';

const doctors = [
  { name: 'Dr. John Doe', specialty: 'Cardiologist', experience: '10 years' },
  { name: 'Dr. Jane Smith', specialty: 'Pediatrician', experience: '8 years' },
  { name: 'Dr. Mike Johnson', specialty: 'Orthopedic Surgeon', experience: '15 years' },
];

const Doctors = () => (
  <div className="doctors">
    <h2>Meet Our Doctors</h2>
    <div className="doctor-list">
      {doctors.map((doctor, index) => (
        <div key={index} className="doctor-profile">
          <h3>{doctor.name}</h3>
          <p>Specialty: {doctor.specialty}</p>
          <p>Experience: {doctor.experience}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Doctors;
