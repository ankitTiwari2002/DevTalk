import React from "react";
import {
  FaQuestionCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaHeadset,
} from "react-icons/fa";

const HelpAndSupport = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-16 text-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
          Help & Support
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Need assistance? We're here to help. Explore our support options below
          to get your questions answered quickly.
        </p>

        {/* Support Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
            <FaQuestionCircle className="text-4xl text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">FAQs</h2>
            <p className="text-gray-400 text-center mt-2">
              Find answers to the most common questions.
            </p>
            <div className="text-center mt-4">
              <a href="/faqs" className="text-blue-400 hover:underline text-sm">
                Visit FAQs
              </a>
            </div>
          </div>

          {/* Email Support Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
            <FaEnvelope className="text-4xl text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">Email Support</h2>
            <p className="text-gray-400 text-center mt-2">
              Drop us an email and we’ll get back to you within 24 hours.
            </p>
            <div className="text-center mt-4">
              <a
                href="mailto:support@yourapp.com"
                className="text-blue-400 hover:underline text-sm"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Call Support Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
            <FaPhoneAlt className="text-4xl text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">Call Support</h2>
            <p className="text-gray-400 text-center mt-2">
              Speak with our support team for urgent queries.
            </p>
            <div className="text-center mt-4">
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:underline text-sm"
              >
                Call Now: +123-456-7890
              </a>
            </div>
          </div>
        </div>

        {/* Live Chat Section */}
        <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mt-16 max-w-6xl mx-auto bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <FaHeadset className="text-3xl text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Real-Time Assistance</h2>
                  <p className="text-slate-400 max-w-md">
                    Initiate a secure, encrypted live session with an expert agent for immediate technical resolution.
                  </p>
                </div>
              </div>
              <button className="whitespace-nowrap bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-indigo-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                Connect to Live Chat
              </button>
            </div>
          </div>

          {/* Final Help Note */}
          <div className="mt-20 text-center">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
              Always at your service | support@devtalk.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HelpAndSupport;
