import React from "react";
import Logo from "./Logo";
import Contact from "./Contact";

const Header: React.FC = () => (
  <div className="flex header alignCenter">
    <Logo />
    <Contact />
  </div>
);

export default Header;
