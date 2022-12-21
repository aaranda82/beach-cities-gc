import { Image, ImageProps } from "@chakra-ui/react";
import React from "react";
interface LogoProps extends ImageProps {}

const Logo: React.FC<LogoProps> = ({ ...props }) => (
  <Image src="logo.jpg" {...props} />
);

export default Logo;
