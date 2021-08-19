import { Box, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

interface HeaderProps extends FlexProps {}

const Header: React.FC<HeaderProps> = ({ ...props }) => (
  <>
    <Flex
      justify="center"
      align="center"
      bg="ffffff"
      flexDir={{ base: "column", md: "row" }}
      {...props}
    >
      <Logo w={{ base: "9.375rem", lg: "12.5rem" }} h="auto" m="1rem" />
      <Nav />
    </Flex>
    <Box w="100%" h="0.25rem" bgColor="brand.sun" />
  </>
);

export default Header;
