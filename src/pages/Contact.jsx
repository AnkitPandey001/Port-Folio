import React, { useState } from 'react';
import contact from '../assest/contact.json';
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 



const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    emailjs
      .sendForm('service_5om8hvv', 'template_rq36wwj', form.current, {
        publicKey: '8ZviKP5ppbAeCw2iD',
      })
      .then(
        () => {
          toast.success('Form submitted successfully!', { autoClose: 2000 });
        },
        (error) => {
          toast.error(`Form submission failed: ${error.text}`, { autoClose: 2000 });
        },
      );
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center p-4 md:mt-14">
      <h1 className="text-4xl w-[300px] font-bold bg-slate-800 text-emerald-400 mb-8 text-center mt-5 rounded-3xl">CONTACT ME</h1>
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-navy-800 p-6 rounded-lg">
        
        {/* Left Section - Animation */}
        <div className=' md:mt-12'>
          <Lottie animationData={contact} />
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-[800px] p-4 flex flex-col gap-4 justify-center md:ml-20">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="font-bold text-lg">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-400 rounded p-2 text-black"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold text-lg">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-400 rounded p-2  text-black"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label htmlFor="description" className="font-bold text-lg">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border border-gray-400 rounded p-2  text-black"
                rows="5"
                placeholder="Describe your inquiry"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-emerald-400 text-white py-2 px-4 rounded hover:bg-emerald-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
