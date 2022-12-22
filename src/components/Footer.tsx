import React, { Dispatch, SetStateAction } from "react";
import InstagramSvg from "../svg/InstagramSvg";
import Contact, { ContactLink } from "./Contact";
import { strings } from "../constants";
import SupabaseClient from "../services/supabase";
import { useRouter } from "next/router";

interface FooterProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const supabase = new SupabaseClient();

const Footer: React.FC<FooterProps> = ({ setShowModal }) => {
  const router = useRouter();
  const footerStyle = "flex justify-center flex-1";
  const container =
    "flex items-center p-10 bg-white flex-col w-full md:flex-row md:p-6";
  const textStyle = `text-xs md:text-sm lg:text-base text-cyan-600 text-center`;
  const handleAdminPortalClick = async () => {
    const { data } = await supabase.getAuthUser();
    if (data.user?.id) {
      router.push("/admin");
    } else {
      setShowModal(true);
    }
  };
  return (
    <div id="Contact" className={container}>
      <div className={`${footerStyle} flex-col text-center`}>
        <p className={textStyle}>{strings.licenseNumber}</p>
        <button className={textStyle} onClick={handleAdminPortalClick}>
          Admin Portal
        </button>
      </div>
      <div className={`${footerStyle} my-5 md:my-0`}>
        <ContactLink
          href="https://www.instagram.com/beachcitiesgc/"
          icon={<InstagramSvg />}
          hideSpacing
        />
      </div>
      <div className={footerStyle}>
        <Contact />
      </div>
    </div>
  );
};

export default Footer;
