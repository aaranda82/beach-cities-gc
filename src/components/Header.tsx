import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import React from "react";

interface HeaderProps extends FlexProps {}

const Header: React.FC<HeaderProps> = ({ ...props }) => (
  <Flex justify="center" align="center" bg="green" {...props}>
    <Flex minH="65px" w="100%" mx="1rem" justify="space-between" align="center">
      <Image src="smiley.png" h="3rem" w="3rem" />
      <Text ml="1rem">Beach Cities General Construction</Text>
    </Flex>
  </Flex>
);

export default Header;
