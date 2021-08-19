import { Image, ImageProps } from "@chakra-ui/react";
import React from "react";
import theLogo from "../../public/logo.jpg";
interface LogoProps extends ImageProps {}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return <Image src="logo.jpg" {...props} />;
};

export default Logo;
