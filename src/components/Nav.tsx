import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, Text, Link, LinkProps, Box } from "@chakra-ui/react";
import React from "react";

interface NavLinkProps extends LinkProps {
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <Link
      href={`#${text}`}
      textAlign="center"
      fontSize="1.5rem"
      fontWeight={400}
      _hover={{ color: "brand.sun", textDecor: "underline" }}
    >
      {text}
    </Link>
  );
};

interface NavProps extends FlexProps {}

const Nav: React.FC<NavProps> = ({ ...props }) => {
  return (
    <Flex
      justify="center"
      ml={{ lg: "2rem" }}
      w={{ base: "80%", md: "30rem" }}
      textAlign="left"
      {...props}
    >
      <Flex flexDir="column">
        <Link href="tel:13103450523">
          <Flex align="center">
            <PhoneIcon mr="1rem" />
            <Text fontSize="1.25rem">1 (310) 345 - 0523</Text>
          </Flex>
        </Link>{" "}
        <Link href="mailto:bobby@beachcitiesgc.com">
          <Flex align="center">
            <EmailIcon mr="1rem" />
            <Text fontSize="1.25rem">bobby@beachcitiesgc.com</Text>
          </Flex>
        </Link>{" "}
      </Flex>
    </Flex>
  );
};

export default Nav;
