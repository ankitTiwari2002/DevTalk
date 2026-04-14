import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import RefundPolicy from "./RefundPolicy";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100 py-12 w-full border-t border-slate-900">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-10 mb-10">
          {/* Branding */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <img src="/logo.png" alt="DevTalk Logo" className="w-8 h-8" />
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                DevTalk
              </h1>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              The premier ecosystem for elite developers to connect, collaborate, and innovate.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://linkedin.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" className="text-slate-400 hover:text-pink-400 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" className="text-slate-400 hover:text-sky-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" className="text-slate-400 hover:text-blue-500 transition-colors">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          {/* Support */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contactUs" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-slate-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/help" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-slate-400 hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <p className="text-slate-400">
                  Email: <a href="mailto:support@devtalk.com" className="hover:text-indigo-400 transition-colors">support@devtalk.com</a>
                </p>
              </li>
              <li><p className="text-slate-400">Location: Global Developer Hub</p></li>
              <li><p className="text-slate-400 font-medium text-xs mt-4">ESTABLISHED 2026</p></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-slate-600 text-xs border-t border-slate-900/50 pt-8">
          &copy; {new Date().getFullYear()} DevTalk. Engineered for excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
