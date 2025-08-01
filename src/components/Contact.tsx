import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's discuss how we can work together on your next project
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className={`inline-flex items-center px-8 py-6 rounded-2xl shadow-lg ${
            darkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <Mail className="h-8 w-8 mr-4 text-blue-500" />
            <div>
              <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Email me directly
              </p>
              <a 
                href="mailto:dineshkumarp9701@gmail.com"
                className={`text-xl font-semibold hover:text-blue-500 transition-colors duration-200 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                dineshkumarp9701@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;