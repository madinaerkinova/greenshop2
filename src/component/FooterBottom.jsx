import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Payments from "../assets/images/payments.png"; 

const FooterBottom = () => {
  return (
    <div>
      <div>
        <div className="footer-container p-8 bg-[#FBFBFB] flex justify-between items-center border-b-2 border-[#46A35899]">
          <div className="account-section">
            <h4 className="footer-title font-semibold text-[20px]">My Account</h4>
            <ul>
              <li className="footer-link hover:text-[#46A358] transition duration-300">My Account</li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Our stores </li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Contact Us</li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Career</li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Specials</li>
            </ul>
          </div>
          <div className="help-guide-section">
            <h4 className="footer-title font-semibold text-[20px]">Help & Guide</h4>
            <ul>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Help Center </li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">How to Buy </li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Shipping & Delivery</li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Product Policy</li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">How to Return</li>
            </ul>
          </div>
          <div className="categories-section">
            <h4 className="footer-title font-semibold text-[20px]">Categories</h4>
            <ul>
              <li className="footer-link hover:text-[#46A358] transition duration-300">House Plants </li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Potter Plants </li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Seeds</li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Small Plants</li>
              <li className="footer-link hover:text-[#46A358] transition duration-300">Accessories</li>
            </ul>
          </div>
          <div className="social-media-section">
            <h4 className="footer-title font-semibold text-[20px]">Social Media</h4>
            <div className="social-icons flex items-center gap-2 my-[15px]">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-button border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg hover:bg-[#46A358] hover:text-white transition transform duration-300 hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-button border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg hover:bg-[#46A358] hover:text-white transition transform duration-300 hover:scale-110">
                <IoLogoInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-button border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg hover:bg-[#46A358] hover:text-white transition transform duration-300 hover:scale-110">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-button border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg hover:bg-[#46A358] hover:text-white transition transform duration-300 hover:scale-110">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-button border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg hover:bg-[#46A358] hover:text-white transition transform duration-300 hover:scale-110">
                <FaYoutube />
              </a>
            </div>
            <h4 className="footer-title font-semibold text-[20px] mb-[20px]">We accept</h4>
            <img src={Payments} alt="Payments" className="payments-image" />
          </div>
        </div>
        <div className="footer-bottom text-center p-4">
          <p>© 2021 GreenShop. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
