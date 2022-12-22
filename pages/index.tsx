import type { NextPage } from "next";
import Head from "next/head";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

const Spacer = () => <div className="bg-yellow-500 h-2 w-full" />;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beach Cities General Construction</title>
        <meta
          name="Beach Cities General Construction"
          content="Beach Cities General Construction"
        />
        <link rel="icon" href="/favicon_logo.ico" />
      </Head>
      <div className="flex flex-col bg-yellow-200 items-center">
        <Header />
        <Spacer />
        <Body />
        <Spacer />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
