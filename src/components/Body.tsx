import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Project } from "../../types";
import supabase from "../services/supabase";
import { Image as Img } from "../../types";

const Body = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const handleProjects = async () => {
    return await supabase.getProjects();
  };

  useEffect(() => {
    handleProjects().then((proj) => {
      setProjects(proj);
    });
  }, []);
  const section =
    "bg-white p-6 my-6 w-10/12 rounded-xl flex flex-wrap gap-3 justify-center items-center shadow-lg";
  const renderImages = (images: Img[]) =>
    images.map((img, index) => {
      return (
        <Image
          key={img.id}
          src={img.src}
          alt={"Photo of cabinets"}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-full h-auto"
        />
      );
    });
  return (
    <>
      {projects.map((set, index) => (
        <div key={set.id} className={section}>
          {renderImages(set.images)}
        </div>
      ))}
    </>
  );
};

export default Body;
