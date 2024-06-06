import React from "react";
import FooterMid from "./FooterMid";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="container">
      <FooterTop />
      <FooterMid />
      <FooterBottom />
    </div>
  );
};

export default Footer;
