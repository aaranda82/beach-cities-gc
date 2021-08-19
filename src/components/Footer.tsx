import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, FlexProps, Link, Text } from "@chakra-ui/react";
import React from "react";
import InstagramIcon from "./Instagram";

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
        justify="space-between"
        p="2rem"
        flexDir={{ base: "column-reverse", lg: "row" }}
        {...props}
      >
        <Flex
          justify="center"
          align="flex-end"
          mb={{ base: "1rem", lg: "unset" }}
        >
          <Text>Lic# 1068671</Text>
          <Text>Website by A.D. Consulting</Text>
        </Flex>
        <Flex
          justify="center"
          align="center"
          mb={{ base: "1rem", lg: "unset" }}
        >
          <Link href="https://www.instagram.com/beachcitiesgc/">
            <InstagramIcon />
          </Link>
        </Flex>
        <Flex
          flexDir="column"
          align="centet"
          justify="center"
          mb={{ base: "1rem", lg: "unset" }}
        >
          <Link href="tel:13103450523">
            <Flex align="center" justify={{ base: "center", lg: "unset" }}>
              <PhoneIcon mr="1rem" />
              <Text fontSize={{ base: "1rem", md: "2rem" }}>
                1 (310) 345 - 0523
              </Text>
            </Flex>
          </Link>{" "}
          <Link href="mailto:bobby@beachcitiesgc.com">
            <Flex align="center" justify={{ base: "center", lg: "unset" }}>
              <EmailIcon mr="1rem" />
              <Text fontSize={{ base: "1rem", md: "2rem" }}>
                bobby@beachcitiesgc.com
              </Text>
            </Flex>
          </Link>{" "}
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
