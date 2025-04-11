import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-30">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg text-orange-500 font-semibold mb-4 px-1 ">Contact Us</h4>
          <div className="flex items-center mb-2 font-bold px-7 py-2">
            <FaPhone className="mr-2" />
            <p>+250 788 931 242</p>
          </div>
          <div className="flex items-center mb-2 font-bold px-7 py-2">
            <FaPhone className="mr-2" />
            <p>+250 792 332 012</p>
          </div>
          <div className="flex items-center mb-2 font-bold px-5">
            <FaEnvelope className="mr-2" />
            <p>info@lyditeshop.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg text-orange-500 font-semibold mb-4">Quick Links</h4>
          <ul className="list-none">
            <li className="mb-2 hover:text-gray-300 font-bold">
              <a href="/">Home</a>
            </li>
            <li className="mb-2 hover:text-gray-300 font-bold">
              <a href="/Store">Store</a>
            </li>
            <li className="mb-2 hover:text-gray-300 font-bold">
              <a href="#popular">Popular</a>
            </li>
            <li className="mb-2 hover:text-gray-300 font-bold">
              <a href="#latest">Latest</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg text-orange-500 font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 px-14">
            <a href="https://web.facebook.com/bobo.belinda" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/BonteIradukunda" className="hover:text-gray-300 " target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/ira.validz/" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Signup (Optional) */}
        <div>
          <h4 className="text-lg text-orange-500 font-semibold mb-4">Subscribe</h4>
          <p className="text-sm text-gray-400 mb-2 font-bold px-5">
            Stay up to date with our latest products and offers.
          </p>
          <div className="flex py-5">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-orange-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 py-4">
        <p className="text-lg text-gray-200 font-bold">
          &copy; {new Date().getFullYear()} Lydite Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;