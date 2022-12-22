import React from "react";
import InstagramSvg from "../svg/InstagramSvg";
import Contact, { ContactLink } from "./Contact";
import { strings } from "../constants";

const Footer: React.FC = () => {
  const footerStyle = "flex justify-center flex-1";
  const container =
    "flex items-center p-10 bg-white flex-col w-full md:flex-row md:p-6";
  const text = `${footerStyle} text-xs md:text-sm lg:text-base text-cyan-600`;
  return (
    <div id="Contact" className={container}>
      <p className={text}>{strings.licenseNumber}</p>
      <div className={`${footerStyle} my-5 md:my-0`}>
        <ContactLink
          href="https://www.instagram.com/beachcitiesgc/"
          icon={<InstagramSvg />}
          hideSpacing
        />
      </div>
      <div className={footerStyle}>
        <Contact />
      </div>
    </div>
  );
};

export default Footer;
