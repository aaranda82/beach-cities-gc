import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/logo.jpg";

const Logo: React.FC = () => {
  const [width, setWidth] = useState(100);
  const hasWindow = typeof window !== "undefined";
  useEffect(() => {
    if (hasWindow && window.innerWidth > 500) setWidth(300);
  }, [hasWindow]);
  return (
    <Image
      src={logo}
      alt="Beach cities general construction logo"
      width={width}
    />
  );
};

export default Logo;
