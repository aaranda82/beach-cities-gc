import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Contact from "./Contact";

interface HeaderProps extends FlexProps {}

const Header: React.FC<HeaderProps> = ({ ...props }) => (
  <Flex
    justify={{ base: "space-between", lg: "space-around" }}
    align="center"
    bg="ffffff"
    p="16px"
    top="0"
    {...props}
  >
    <Logo w={{ base: "6rem", lg: "12.5rem" }} h="auto" />
    <Contact />
  </Flex>
);

export default Header;
