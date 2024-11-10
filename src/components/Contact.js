// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
