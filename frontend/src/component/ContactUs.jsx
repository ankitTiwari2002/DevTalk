import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-16 text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-purple-400">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          We'd love to hear from you! Feel free to reach out to us through any
          of the options below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500 transition-shadow duration-300">
            <FaEnvelope className="text-3xl text-purple-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">Email</h2>
            <p className="text-gray-400 text-center mt-2">
              Drop us a line at{" "}
              <a
                href="mailto:support@yourapp.com"
                className="text-purple-400 hover:underline"
              >
                support@yourapp.com
              </a>
            </p>
          </div>

          {/* Phone Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500 transition-shadow duration-300">
            <FaPhoneAlt className="text-3xl text-purple-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">Phone</h2>
            <p className="text-gray-400 text-center mt-2">
              Call us at{" "}
              <a
                href="tel:+1234567890"
                className="text-purple-400 hover:underline"
              >
                +123-456-7890
              </a>
            </p>
          </div>

          {/* Address Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500 transition-shadow duration-300">
            <FaMapMarkerAlt className="text-3xl text-purple-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">Address</h2>
            <p className="text-gray-400 text-center mt-2">
              123, bhawarkua, <br />
              Indore, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
