import Image from "next/image";
import React from "react";
import { images, imageType } from "../constants";

const Body = () => {
  const section =
    "bg-white p-6 my-6 w-10/12 rounded-xl flex flex-wrap gap-3 justify-center items-center shadow-lg";
  const renderImages = (images: imageType[]) =>
    images.map((img, index) => {
      return (
        <Image
          key={img.alt + index}
          src={img.src}
          alt={img.alt}
          width={600}
          className="rounded-lg"
        />
      );
    });
  return (
    <>
      {images.map((set, index) => (
        <div key={`section-${index}`} className={section}>
          {renderImages(set)}
        </div>
      ))}
    </>
  );
};

export default Body;
