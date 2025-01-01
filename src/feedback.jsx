// Import necessary libraries
import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-gray-200 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h2>
        <p className="text-center text-gray-400 mb-8">
          Have questions or feedback? Fill out the form below and we’ll get back to you soon!
        </p>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-600 bg-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-600 bg-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
              placeholder="Your Email"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-600 bg-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
              placeholder="Subject"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-600 bg-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
