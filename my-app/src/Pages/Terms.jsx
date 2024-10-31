import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Effective Date: October 30, 2024</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Introduction</h2>
          <p className="text-gray-300 mb-6">
            Welcome to New Techies ("Website"). These Terms and Conditions ("Terms") govern your access to and use of the Website. 
            By accessing or using the Website, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Definitions</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>"We" or "Us" or "Our" refers to New Techies, the owner of the Website.</li>
            <li>"You" or "User" refers to anyone accessing or using the Website.</li>
            <li>"Content" refers to any information, data, text, images, videos, or other materials on the Website.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Terms of Use</h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-4">
            <li>
              <span className="font-semibold">Acceptance:</span> By using the Website, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms.
            </li>
            <li>
              <span className="font-semibold">Intellectual Property:</span> All Content on the Website is owned or licensed 
              by Us. You may not reproduce, distribute, or display any Content without Our permission.
            </li>
            <li>
              <span className="font-semibold">User Conduct:</span> You agree not to:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Use the Website for unlawful or harmful purposes.</li>
                <li>Post or transmit spam, viruses, or malicious content.</li>
                <li>Interfere with Website operations or other users.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Disclaimer:</span> We make no warranties regarding the Website's accuracy, 
              completeness, or reliability.
            </li>
            <li>
              <span className="font-semibold">Limitation of Liability:</span> We shall not be liable for any damages 
              arising from Website use.
            </li>
            <li>
              <span className="font-semibold">Indemnification:</span> You agree to indemnify Us against any claims, 
              damages, or expenses arising from your Website use.
            </li>
            <li>
              <span className="font-semibold">Termination:</span> We may terminate or suspend your access to the Website 
              at any time.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Governing Law</h2>
          <p className="text-gray-300 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of Nigeria.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to Terms</h2>
          <p className="text-gray-300 mb-6">
            We reserve the right to modify these Terms at any time. Your continued Website use constitutes acceptance 
            of any changes.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            For questions or concerns, please contact john@techiejohn.com or ZB 95, Jubilation Avenue, Maitama II, 
            Katampe, Abuja.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Acceptance</h2>
          <p className="text-gray-300">
            By using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>
      </motion.div>
    </div>
  );
}