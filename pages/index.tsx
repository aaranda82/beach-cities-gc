import type { NextPage } from "next";
import { useState } from "react";
import LoginModal from "../src/components/Modals/LoginModal";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

export const Spacer = () => <div className="bg-yellow-500 h-2 w-full" />;

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col bg-amber-100 items-center">
      {showModal ? <LoginModal setShowModal={setShowModal} /> : null}
      <Header />
      <Spacer />
      <Body />
      <Spacer />
      <Footer setShowModal={setShowModal} />
    </div>
  );
};

export default Home;
