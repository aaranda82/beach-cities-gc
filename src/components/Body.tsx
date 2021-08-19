import { Box, Flex, FlexProps, Image } from "@chakra-ui/react";
import React from "react";
import Section from "./Section";

interface BodyProps extends FlexProps {}

const Body: React.FC<BodyProps> = ({ ...props }) => {
  return (
    <Flex bgColor="brand.sand" justify="center" py="4rem" {...props}>
      <Flex
        w={{ base: "100%", lg: "60%" }}
        flexDir="column"
        align="center"
        justify="center"
      >
        <Section>
          <Image src="whiteKitchen3.JPG" borderRadius="1rem" />
          <Image src="whiteKitchen6.JPG" my="2rem" borderRadius="1rem" />
          <Image src="whiteKitchen7.JPG" borderRadius="1rem" />
        </Section>
        <Section>
          <Image src="blueKitchen3.JPG" borderRadius="1rem" />
          <Image src="blueKitchen4.JPG" my="2rem" borderRadius="1rem" />
          <Image src="blueKitchen6.JPG" mb="2rem" borderRadius="1rem" />
          <Image src="blueKitchen7.JPG" borderRadius="1rem" />
        </Section>
        <Section>
          <Image src="bathroom1.JPG" mb="2rem" borderRadius="1rem" />
          <Image src="bathroom2.JPG" borderRadius="1rem" />
        </Section>
      </Flex>
    </Flex>
  );
};

export default Body;
