import React from "react";
import Logo from "./Logo";
import Contact from "./Contact";

const Header: React.FC = () => (
  <div className="flex justify-around items-center p-4 bg-white w-full">
    <Logo />
    <Contact />
  </div>
);

export default Header;
