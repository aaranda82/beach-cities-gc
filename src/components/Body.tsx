import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import React from "react";

interface BodyProps extends FlexProps {}

const Body: React.FC<BodyProps> = ({ ...props }) => {
  return (
    <Flex flexDir="column" {...props}>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
      <Box fontSize="3rem">Body</Box>
    </Flex>
  );
};

export default Body;
