import Image from "next/image";
import React from "react";
import logo from "../../public/logo.jpg";

const Logo: React.FC = () => {
  const width = 100;
  return (
    <Image
      src={logo}
      alt="Beach cities general construction logo"
      width={width}
      height={width * 0.71}
    />
  );
};

export default Logo;
