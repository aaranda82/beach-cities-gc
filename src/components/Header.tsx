import React from "react";
import Logo from "./Logo";
import Contact from "./Contact";

const Header: React.FC = () => (
  <div className="flex justify-around items-center p-4 bg-slate-50 w-full">
    <Logo />
    <Contact />
  </div>
);

export default Header;
