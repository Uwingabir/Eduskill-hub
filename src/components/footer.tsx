import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="mt-2 text-gray-400">
              Bridging the gap between education and employment with innovative solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-sm">
            <a href="/about" className="hover:text-white">
              About Us
            </a>
            <a href="/services" className="hover:text-white">
              Services
            </a>
            <a href="/careers" className="hover:text-white">
              Careers
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
