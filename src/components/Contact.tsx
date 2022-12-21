import React from "react";

type ContactInfo = {
  content?: string;
  href: string;
  icon: React.ReactNode;
};

const contactInfo: ContactInfo[] = [
  {
    content: "1 (310) 345 - 0523",
    href: "tel:13103450523",
    icon: <p>phone icon</p>,
  },
  {
    content: "bobby@beachcitiesgc.com",
    href: "mailto:bobby@beachcitiesgc.com",
    icon: <p>email icon</p>,
  },
];

type ContactLinkProps = ContactInfo;

export const ContactLink: React.FC<ContactLinkProps> = ({
  content,
  href,
  icon,
}) => {
  return (
    <a href={href}>
      <div className="flex alignCenter">
        {icon}
        {content ? <p style={{ fontSize: "1rem" }}>{content}</p> : null}
      </div>
    </a>
  );
};

const Contact: React.FC = () => (
  <div style={{ textAlign: "left" }} className="flex justifyCenter">
    <div className="flex flexColumn">
      {contactInfo.map(({ content, href, icon }, index) => {
        const lastItem = index === contactInfo.length - 1;
        return (
          <ContactLink
            key={content}
            content={content}
            href={href}
            icon={icon}
          />
        );
      })}
    </div>
  </div>
);

export default Contact;
