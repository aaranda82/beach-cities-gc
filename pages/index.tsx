import type { NextPage } from "next";
import { useState } from "react";
import LoginModal from "../src/components/Modals/LoginModal";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import DevLoginModal from "../src/components/Modals/DevLoginModal";

export const Spacer: React.FC<{ blank?: boolean; h?: "h-2" | "h-4" | "h-6" }> =
  ({ blank = false, h = "h-2" }) => (
    <div className={`${blank ? "" : `bg-yellow-500 `}${h} w-full`} />
  );

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col bg-amber-100 items-center">
      {!showModal ? null : process.env.NEXT_PUBLIC_ENV === "dev" ? (
        <DevLoginModal setShowModal={setShowModal} />
      ) : (
        <LoginModal setShowModal={setShowModal} />
      )}
      <Header />
      <Spacer />
      <Body />
      <Spacer />
      <Footer setShowModal={setShowModal} />
    </div>
  );
};

export default Home;
