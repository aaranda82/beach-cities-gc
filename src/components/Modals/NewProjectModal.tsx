import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../Button";
import supabase from "../../services/supabase";
import BaseModal from "./BaseModal";
import { useForm, SubmitHandler } from "react-hook-form";
import { Spacer } from "../../../pages";
import { ErrorText } from "../Utils";

type Inputs = {
  projectName: string;
  files: FileList;
};

enum errorEnum {
  required = "required",
  minLength = "minLength",
}

const handleErrorText = (error: string | undefined) => {
  switch (error) {
    case errorEnum.required:
      return "Project Name is a required field";
    case errorEnum.minLength:
      return "Project Name must be at least 3 charaters long";
    default:
      return "";
  }
};

interface NewProjectModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const NewProjectModal: React.FC<NewProjectModalProps> = ({ setShowModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await supabase.createProject(
      { name: data.projectName, description: "" },
      data.files
    );
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <BaseModal>
      <div className="p-10 flex items-center flex-col w-full gap-6">
        <div className="w-full flex justify-end">
          <Button text="Close" onClickFn={handleClose} plain />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-medium text-cyan-600" id="modal-title">
            New Project
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 max-w-xs">
              {/* PROJECT NAME */}
              <label>Project Name</label>
              <input
                {...register("projectName", { required: true, minLength: 3 })}
                className="border rounded-md p-2"
              />
              <ErrorText error={handleErrorText(errors.projectName?.type)} />
              <Spacer blank h="h-4" />
              {/* FILE UPLOAD */}
              <label>Images to upload</label>
              <input
                type="file"
                multiple={true}
                {...register("files", {
                  validate: (fileList) => {
                    if (fileList.length < 1)
                      return "You must upload an image to create a project";
                  },
                })}
                className="border rounded-md p-2"
              />
              <ErrorText error={errors.files?.message} />
              <Spacer blank h="h-4" />
              <Button text="Submit" submit />
            </div>
          </form>
        </div>
      </div>
    </BaseModal>
  );
};

export default NewProjectModal;
