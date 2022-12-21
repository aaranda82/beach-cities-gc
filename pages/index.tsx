import { Flex, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Beach Cities General Construction</title>
        <meta
          name="Beach Cities General Construction"
          content="Beach Cities General Construction"
        />
        <link rel="icon" href="/favicon_logo.ico" />
      </Head>
      <Flex flexDir="column">
        <Header />
        <Box w="100%" h="0.25rem" bgColor="brand.sun" />
        <Body />
        <Footer />
      </Flex>
    </Box>
  );
};

export default Home;
