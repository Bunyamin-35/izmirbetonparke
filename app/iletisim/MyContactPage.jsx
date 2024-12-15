'use client'

import React from 'react'
import { useState } from 'react';


const MyContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  return (
    <div className="min-h-[50vh] p-6">
      {/* Contact Form Section */}
      <div className="w-full h-auto">
        {/* Form Container */}
        {/* <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Subject"
                required
              />
            </div>

            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
                required
              />
            </div>

            
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div> */}
        {/* Map Section */}
        <div className="flex flex-col md:flex-row-reverse gap-3 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="flex justify-start text-2xl font-bold text-gray-800 mb-4">İletişim Bilgilerimiz</h2>
            <h2 className="flex justify-start text-1xl font-bold text-gray-800 mb-4">Merkez Ofisimiz</h2>
            <div className="text-gray-600 mb-4">
              <div className='flex items-center gap-3'>
                <span className='my-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                </span>
                <span className="hidden sm:flex">29 Ekim, Ulukent Sanayi, 10007. Sk. Sitesi No:24, 35663 Menemen/İzmir, Türkiye</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='my-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="hidden sm:flex">+90 (232) 833 29 99</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='my-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" class="bi bi-phone-vibrate-fill" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M1.807 4.734a.5.5 0 1 0-.884-.468A8 8 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A7 7 0 0 1 1 8c0-1.18.292-2.292.807-3.266m13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A8 8 0 0 0 16 8a8 8 0 0 0-.923-3.734M3.34 6.182a.5.5 0 1 0-.93-.364A6 6 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A5 5 0 0 1 3 8c0-.642.12-1.255.34-1.818m10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818s-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8s-.145-1.505-.41-2.182" />
                  </svg> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 20 20">
                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                  </svg> */}
                </span>
                <span className="hidden sm:flex">+90 (541) 262 29 22</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='my-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="hidden sm:flex">info@balabaninsaat.com.tr</span>
              </div>
            </div>
          </div>
          {/* Google Maps Embed */}
          <div className="w-3/4 h-96 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.033818371305!2d27.0286195!3d38.532988599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd1aae0a633cb%3A0x2b113ece0fa6b3e9!2zQmFsYWJhbiDEsG7Fn2FhdCDFnmlya2V0bGVyIEdydWJ1!5e0!3m2!1sen!2sus!4v1729509230641!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyContactPage