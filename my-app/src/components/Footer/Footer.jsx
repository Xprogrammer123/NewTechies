import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import social media icons
import { AiOutlineMail } from 'react-icons/ai'; // Mail icon
import { IoMdCall } from 'react-icons/io'; // Phone icon
import { GiPositionMarker } from 'react-icons/gi'; // Location pin icon

export function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-md text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">New Techies</h3>
            <p className="mb-4">Transforming ideas into digital reality. We're passionate about creating innovative solutions that drive business growth.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-blue-400 transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Mobile Applications</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>AI Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <GiPositionMarker className="w-5 h-5 text-blue-400" />
                <span>ZB 95, Jubilation Avenue, Maitama II, Katampe, Abuja. </span>
              </div>
              <div className="flex items-center space-x-3">
                <IoMdCall className="w-5 h-5 text-blue-400" />
                <span>+2348101458024</span>
              </div>
              <div className="flex items-center space-x-3">
                <AiOutlineMail className="w-5 h-5 text-blue-400" />
                <span> getstarted@techiejohn.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} New Techies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
