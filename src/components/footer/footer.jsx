import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import CWCLOGO from "../../img/cwc_logo-removebg-preview.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    window.open("https://docs.google.com/forms/d/1lFtadlmPSjf-Zrm7xcvJ100-1f-QfeU4n3aNI9RmTYs/edit", "_blank");
    setEmail(""); // Reset the input field after clicking subscribe
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-10">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={CWCLOGO} alt="CWC Logo" />
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
            <li><Link to="/about" className="hover:text-white1">About Us</Link></li>
            <li><Link to="/events" className="hover:text-white">Events</Link></li>
            <li><Link to="/hire-products" className="hover:text-white">Hired Products</Link></li>
            <li><Link to="#" className="hover:text-white">Give</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and exclusive announcements.
          </p>
          <div className="flex">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-grow p-2 bg-gray-800 border border-gray-600 text-white focus:outline-none"
            />
            <button onClick={handleSubscribe} className="bg-warning direction text-gray-900 px-2 py-2 ml-2">Subscribe</button>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Phone: +254 711263189</p>
          <p className="text-sm">Email: cwcchurch254@gmail.com</p>
          <p className="text-sm">Address: PJCW+QV3, Kikuyu</p>
          <button className="btn bg-warning direction">
            <a href="https://www.google.com/maps/dir/-1.3274762,36.7176299/kag+gikambura/@-1.3034027,36.5784531,11.56z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x182f1e7bf8a96ab1:0x82731d611b4ef29!2m2!1d36.6471762!2d-1.2780582?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D">Direction</a>
          </button>
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
