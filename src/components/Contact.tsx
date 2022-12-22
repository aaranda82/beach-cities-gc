import React from "react";
import { strings } from "../constants";
import EmailSvg from "../svg/EmailSvg";
import PhoneSvg from "../svg/PhoneSvg";

type ContactInfo = {
  content?: string;
  href: string;
  icon: React.ReactNode;
};

const parsedPhone = strings.phone
  .split("")
  .filter((char) => !isNaN(parseInt(char)))
  .join("");

const contactInfo: ContactInfo[] = [
  {
    content: strings.phone,
    href: `tel:1${parsedPhone}`,
    icon: <PhoneSvg />,
  },
  {
    content: strings.email,
    href: `mailto:${strings.email}`,
    icon: <EmailSvg />,
  },
];

type ContactLinkProps = ContactInfo & {
  hideSpacing?: boolean;
};

export const ContactLink: React.FC<ContactLinkProps> = ({
  content,
  href,
  icon,
  hideSpacing = false,
}) => {
  const text = "ml-6 text-xs md:text-sm lg:text-base text-cyan-600";
  const container = `flex items-center${hideSpacing ? "" : " mb-2"}`;
  return (
    <a href={href} className="flex">
      <div className={container}>
        <div>{icon}</div>
        {content ? <p className={text}>{content}</p> : null}
      </div>
    </a>
  );
};

const Contact = () => (
  <div className="flex justify-items-center">
    <div className="flex flex-col">
      {contactInfo.map(({ content, href, icon }, index) => (
        <ContactLink
          key={content}
          content={content}
          href={href}
          icon={icon}
          hideSpacing={contactInfo.length - 1 === index}
        />
      ))}
    </div>
  </div>
);

export default Contact;
