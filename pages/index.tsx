import type { NextPage } from "next";
import Head from "next/head";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import { theme } from "../styles/theme";

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
      <div className="flex flexColumn">
        <Header />
        <div
          style={{
            width: "100%",
            height: "0.25rem",
            backgroundColor: theme.colors.brand.sun,
          }}
        />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
