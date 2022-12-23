import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AdminModal from "../src/components/Modals/AdminModal";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

const Spacer = () => <div className="bg-yellow-500 h-2 w-full" />;

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col bg-amber-100 items-center">
      {showModal ? <AdminModal setShowModal={setShowModal} /> : null}
      <Header />
      <Spacer />
      <Body />
      <Spacer />
      <Footer setShowModal={setShowModal} />
    </div>
  );
};

export default Home;
