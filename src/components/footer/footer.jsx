import React from "react";
import CWCLOGO from "../../img/cwc_logo-removebg-preview.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-10">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={CWCLOGO} alt="" />
          <p className="text-sm">
          Empowering your spiritual journey with faith-driven guidance and unwavering support.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="https://www.tiktok.com/@kagcwc"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@cwc_churches_of_Kenya"><i className="fab fa-youtube"></i></a>
           
            
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['About Us', 'Services', 'Products', 'Contact', 'Careers', 'Blog'].map((link) => (
              <li key={link} className="hover:text-white cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
        
        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and exclusive offers.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow p-2 bg-gray-800 border border-gray-600 text-white focus:outline-none"
            />
            <button className="bg-white text-gray-900 px-4 py-2 ml-2">Subscribe</button>
          </div>
        </div>

        {/* Our Journey */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Our Journey</h3>
          <div className="bg-gray-700 w-full h-24 flex items-center justify-center rounded-lg">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2025 CWC community. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <span className="hover:text-white cursor-pointer">Build by</span>
          <span className="hover:text-white cursor-pointer">OPTI-NEXUS</span>
          <span className="hover:text-white cursor-pointer">Technologies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
