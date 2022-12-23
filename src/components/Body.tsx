import React, { useEffect, useState } from "react";
import { Project } from "../../types";
import supabase from "../services/supabase";
import { Image as Img } from "../../types";
import ProjectPhoto from "./ProjectPhoto";

export const renderImages = (images: Img[]) =>
  images.map((img, index) => <ProjectPhoto src={img.src} key={index} />);

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

  return (
    <>
      {projects.map((set) => (
        <div key={set.id} className={section}>
          {renderImages(set.images)}
        </div>
      ))}
    </>
  );
};

export default Body;
