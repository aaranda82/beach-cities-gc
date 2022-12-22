import { useState } from "react";
import SupabaseClient from "../services/supabase";
import Button from "./Button";
import Image from "next/image";

const supabase = new SupabaseClient();

const FileUpload = () => {
  const [file, setFiles] = useState<null | File>(null);
  const [image, setImage] = useState("");
  return (
    <div className="py-10 flex flex-col items-center">
      <label htmlFor="file upload">Select a file</label>
      <input
        type="file"
        name="file upload"
        multiple={true}
        onChange={(e) => {
          e.target.files?.[0].size && setFiles(e.target.files[0]);
        }}
      />
      <Button
        text="Add file"
        onClickFn={async () => {
          if (file?.name) {
            const { data, error } = await supabase.uploadImage(file.name, file);
            console.log({ data, error });
            if (data?.path) {
              const url = supabase.getImage(data.path);
              console.log(url);
              setImage(url.data.publicUrl);
            }
          }
        }}
      />
      {image ? (
        <Image
          src={image}
          alt="Some random image for testing"
          width={200}
          height={400}
        />
      ) : null}
    </div>
  );
};

export default FileUpload;
