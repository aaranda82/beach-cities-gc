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

interface DeleteModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  setShowModal,
  showModal,
}) => {
  useEffect(() => {
    showModal && setTimeout(() => setShowModal(false), 1500);
  }, [showModal]);
  return showModal ? (
    <BaseModal>
      <div className="p-10 flex items-center flex-col w-full gap-6">
        <h3 className="text-cyan-600 text 3xl font-bold text-center">
          Delete Successful!
        </h3>
      </div>
    </BaseModal>
  ) : null;
};

export default DeleteModal;
