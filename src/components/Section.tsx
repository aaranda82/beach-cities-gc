import React from "react";
import { theme } from "../../styles/theme";

const Section: React.FC = ({ children }) => {
  return (
    <div
      className="flex justifyCenter alignCenter section"
      style={{ backgroundColor: theme.colors.brand.white }}
    >
      {children}
    </div>
  );
};

export default Section;
