import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, FlexProps, Link, Text } from "@chakra-ui/react";
import React from "react";
import InstagramIcon from "./Instagram";
import Contact, { ContactLink } from "./Contact";

interface FooterProps extends FlexProps {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <>
      <Box
        h="1.5rem"
        bgGradient="linear(to-t, lightgrey 15%, brand.sand 85%)"
      />
      <Flex
        id="Contact"
        bgColor="brand.sun"
        justify={{ base: "center", lg: "space-around" }}
        flexDir={{ base: "column-reverse", lg: "row" }}
        alignItems="center"
        p="2rem"
        {...props}
      >
        <Text>Lic# 1068671</Text>
        <ContactLink
          href="https://www.instagram.com/beachcitiesgc/"
          icon={<InstagramIcon />}
          mb={{ base: "1rem", lg: "0" }}
        />
        <Contact mb={{ base: "1rem", lg: "0" }} />
      </Flex>
    </>
  );
};

export default Footer;
