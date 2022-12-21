import React from "react";
import { theme } from "../../styles/theme";
import Section from "./Section";

const Body: React.FC = () => {
  return (
    <div
      className="flex justifyCenter"
      style={{
        backgroundColor: theme.colors.brand.sand,
        padding: "0 4rem 0 4rem",
      }}
    >
      <div
        className="flex justifyCenter alignCenter flexColumn"
        style={{
          width: "100%",
        }}
      >
        <Section>
          <img src="whiteKitchen3.JPG" className="imageRadius" />
          <img src="whiteKitchen6.JPG" className="imageRadius imageMarginY" />
          <img src="whiteKitchen7.JPG" className="imageRadius" />
        </Section>
        <Section>
          <img src="blueKitchen3.JPG" className="imageRadius" />
          <img src="blueKitchen4.JPG" className="imageRadius imageMarginY" />
          <img
            src="blueKitchen6.JPG"
            className="imageRadius imageMarginBottom"
          />
          <img src="blueKitchen7.JPG" className="imageRadius" />
        </Section>
        <Section>
          <img src="bathroom1.JPG" className="imageRadius imageMarginBottom" />
          <img src="bathroom2.JPG" className="imageRadius" />
        </Section>
      </div>
    </div>
  );
};

export default Body;
