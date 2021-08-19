import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import React from "react";

interface SectionProps extends FlexProps {}

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return (
    <Flex
      my="2rem"
      p={{ base: "2rem", md: "4rem" }}
      bgColor="brand.white"
      borderRadius="2rem"
      justify="center"
      align="center"
      flexWrap="wrap"
      boxShadow="10px 5px 5px lightgrey"
      w="100%"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Section;
