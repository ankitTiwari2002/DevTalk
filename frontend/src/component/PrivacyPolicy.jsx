import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-16 text-slate-100 relative overflow-hidden">
      {/* Header Section */}
      <div className="bg-slate-900 border-b border-slate-800 py-16 shadow-2xl relative">
        <div className="absolute inset-0 bg-indigo-600/5 blur-3xl rounded-full"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Privacy <span className="text-indigo-400">Policy</span></h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            At DevTalk, your privacy is our priority. This document outlines how we protect and manage your data in our elite developer ecosystem.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-12 p-8 bg-slate-900/50 backdrop-blur-sm shadow-2xl rounded-3xl border border-slate-800 max-w-4xl">
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
          <p className="text-slate-400 leading-relaxed">
            At DevTalk, we are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data within our professional networking platform.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-indigo-400 mb-4 tracking-wide uppercase text-sm">
            1. Information We Collect
          </h3>
          <ul className="space-y-4 text-slate-400">
            <li className="flex gap-3">
              <span className="text-indigo-500">•</span>
              <span><strong>Personal Information:</strong> Name, professional credentials, email address, and profile data provided during account creation.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-500">•</span>
              <span><strong>Usage Data:</strong> Analytical insights on how you interact with our ecosystem (e.g., connections made, technical interests).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-500">•</span>
              <span><strong>Device Information:</strong> Technical identifiers such as IP address and browser specifications for security auditing.</span>
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-indigo-400 mb-4 tracking-wide uppercase text-sm">
            2. How We Use Your Information
          </h3>
          <p className="text-slate-400 mb-4">We utilize your data to:</p>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              <span>Optimize and maintain high-performance services.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              <span>Curate elite developer connections and match-making algorithms.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              <span>Issue critical security notifications and platform updates.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              <span>Ensure compliance with global regulatory standards.</span>
            </li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4">Contact Our Privacy Team</h3>
          <p className="text-slate-400 mb-4">
            For inquiries regarding your data or to exercise your privacy rights, please reach out to our dedicated support office:
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-slate-300">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:support@devtalk.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                support@devtalk.com
              </a>
            </p>
            <p className="text-slate-300">
              <span className="font-semibold">Address:</span> Global Headquarters, Indore, India
            </p>
          </div>
        </section>

        {/* Footer Note */}
        <p className="text-slate-600 text-xs mt-10 text-center uppercase tracking-widest">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
