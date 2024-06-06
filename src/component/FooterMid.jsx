import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from '../assets/icons/logo.svg'; 
import '../App.css'; 

const FooterMid = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleLogoClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="footer-mid">
      <div className="footer-content py-10 px-5 flex justify-between gap-20 items-center bg-green-50">
        <div className="logo-container flex items-center gap-2">
          <img
            src={logo}
            alt="GreenShop Logo"
            className={`w-32 ${isRotating ? 'rotate' : ''}`}
            onClick={handleLogoClick}
          />
          <span className="text-green-600 text-2xl font-bold">GreenShop</span>
        </div>
        <div className="address-container flex items-center gap-2 hover:text-green-600 transition duration-300">
          <FaMapMarkerAlt className="text-green-700" />
          <p>
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </p>
        </div>
        <div className="email-container flex items-center gap-2 hover:text-green-600 transition duration-300">
          <FaEnvelope className="text-green-600" />
          <p>contact@greenshop.com</p>
        </div>
        <div className="phone-container flex items-center gap-2 hover:text-green-600 transition duration-300">
          <FaPhoneAlt className="text-green-600" />
          <p>+88 01911 717 490</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMid;
