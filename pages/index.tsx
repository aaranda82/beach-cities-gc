import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AdminModal from "../src/components/AdminModal";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

const Spacer = () => <div className="bg-yellow-500 h-2 w-full" />;

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
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
      <div className="flex flex-col bg-amber-100 items-center">
        {showModal ? <AdminModal setShowModal={setShowModal} /> : null}
        <Header />
        <Spacer />
        <Body />
        <Spacer />
        <Footer setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Home;
