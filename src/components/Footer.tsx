import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface FooterProps extends FlexProps {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <Flex {...props}>
      <Flex>Logo</Flex>
    </Flex>
  );
};

export default Footer;
