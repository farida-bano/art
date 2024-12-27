// components/Footer.tsx
"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubscription}>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 w-full mb-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full w-full hover:bg-yellow-600 transition"
              >
                Subscribe
              </button>
              {message && (
                <p
                  className={`mt-3 text-sm ${
                    message.includes('Thank you')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">&copy; 2024 Cooking Blog. All Rights Reserved.</p>
        </div>

        {/* Thank You GIF */}
        <div className="mt-6">
          <img 
            src="/you.gif" 
            alt="Thank You" 
            className="mx-auto w-32 h-32" 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
