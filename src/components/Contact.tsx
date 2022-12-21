import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, Text, Link, LinkProps } from "@chakra-ui/react";
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
    icon: <PhoneIcon mr="1rem" />,
  },
  {
    content: "bobby@beachcitiesgc.com",
    href: "mailto:bobby@beachcitiesgc.com",
    icon: <EmailIcon mr="1rem" />,
  },
];

type ContactLinkProps = ContactInfo & LinkProps;

export const ContactLink: React.FC<ContactLinkProps> = ({
  content,
  href,
  icon,
  ...props
}) => {
  return (
    <Link href={href} {...props}>
      <Flex align="center">
        {icon}
        {content ? <Text fontSize="1rem">{content}</Text> : null}
      </Flex>
    </Link>
  );
};

interface NavProps extends FlexProps {}

const Contact: React.FC<NavProps> = ({ ...props }) => (
  <Flex justify="center" textAlign="left" {...props}>
    <Flex flexDir="column">
      {contactInfo.map(({ content, href, icon }, index) => {
        const lastItem = index === contactInfo.length - 1;
        return (
          <ContactLink
            key={content}
            content={content}
            href={href}
            icon={icon}
            mb={!lastItem ? "1rem" : "unset"}
          />
        );
      })}
    </Flex>
  </Flex>
);

export default Contact;
