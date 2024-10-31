import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white mb-8">New Techies Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Effective Date: October 30, 2024</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Introduction</h2>
          <p className="text-gray-300 mb-6">
            New Techies ("We" or "Us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Personal Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We collect information that identifies, relates to, describes, or could reasonably be linked with you ("Personal Information"). This includes:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Contact information (name, email, phone number, address)</li>
            <li>Browser and device information (IP address, browser type, operating system)</li>
            <li>Usage data (pages visited, time spent on Website)</li>
            <li>Communication data (emails, chat messages)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How We Collect Personal Information</h2>
          <p className="text-gray-300 mb-4">We collect Personal Information:</p>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li>Directly from you (e.g., when you fill out a form or contact us)</li>
            <li>Automatically through cookies and analytics tools</li>
            <li>From third-party services (e.g., social media, payment processors)</li>
          </ol>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Use of Personal Information</h2>
          <p className="text-gray-300 mb-4">We use Personal Information:</p>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li>To provide and improve our services</li>
            <li>To communicate with you</li>
            <li>To personalize your experience</li>
            <li>For marketing and advertising purposes</li>
            <li>To comply with laws and regulations</li>
          </ol>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Disclosure of Personal Information</h2>
          <p className="text-gray-300 mb-4">We may disclose Personal Information:</p>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li>To service providers and contractors</li>
            <li>To affiliated companies</li>
            <li>To comply with laws and regulations</li>
            <li>In connection with a merger or acquisition</li>
          </ol>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Cookies and Tracking</h2>
          <p className="text-gray-300 mb-4">We use cookies to:</p>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li>Analyze Website usage</li>
            <li>Personalize your experience</li>
            <li>Target advertising</li>
          </ol>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-300 mb-4">You have the right to:</p>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li>Access and update your Personal Information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request deletion of your Personal Information</li>
            <li>Object to processing</li>
          </ol>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Security</h2>
          <p className="text-gray-300 mb-6">
            We implement reasonable security measures to protect your Personal Information.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-300 mb-6">
            We reserve the right to modify this Privacy Policy at any time.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please{' '}
            <Link to="/contact" className="text-blue-400 hover:text-blue-300">contact us</Link>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}