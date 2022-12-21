import React from "react";
import InstagramIcon from "./Instagram";
import Contact, { ContactLink } from "./Contact";
import { theme } from "../../styles/theme";

const Footer: React.FC = () => {
  return (
    <>
      <div
        style={{
          height: "1.5rem",
          backgroundColor: "linear(to-t, lightgrey 15%, brand.sand 85%)",
        }}
      />
      <div
        id="Contact"
        className="flex footer alignCenter"
        style={{ backgroundColor: theme.colors.brand.sun }}
      >
        <p>Lic# 1068671</p>
        <ContactLink
          href="https://www.instagram.com/beachcitiesgc/"
          icon={<InstagramIcon />}
        />
        <Contact />
      </div>
    </>
  );
};

export default Footer;
