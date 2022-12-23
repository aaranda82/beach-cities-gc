import Image from "next/image";

const ProjectPhoto = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt={"Photo of cabinets"}
      width={0}
      height={0}
      sizes="100vw"
      className="rounded-lg w-full h-auto"
    />
  );
};

export default ProjectPhoto;
