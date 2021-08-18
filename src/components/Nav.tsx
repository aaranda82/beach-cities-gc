import { Flex, FlexProps, Text, Link } from "@chakra-ui/react";
import React from "react";

interface NavProps extends FlexProps {}

const Nav: React.FC<NavProps> = ({ ...props }) => {
  return (
    <Flex justify="center" position="sticky" top="0" w="100%" {...props}>
      <Flex width="60%" justify="space-around">
        <Link href="#about">About</Link>
        <Link href="#pictures">Pictures</Link>
        <Link href="#contact">Contact</Link>
      </Flex>
    </Flex>
  );
};

export default Nav;
