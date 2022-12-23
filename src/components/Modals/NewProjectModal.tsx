import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import supabase from "../../services/supabase";
import BaseModal from "./BaseModal";

interface NewProjectModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const NewProjectModal: React.FC<NewProjectModalProps> = ({ setShowModal }) => {
  const handleSubmit = async () => {};

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <BaseModal>
      <div className="p-10 flex items-center flex-col w-full gap-6">
        <div className="w-full flex justify-end">
          <Button text="Close" onClickFn={handleClose} plain />
        </div>
        <div className="flex flex-col items-center gap-10">
          <h3
            className="text-2xl font-medium leading-6 text-cyan-600"
            id="modal-title"
          >
            New Project
          </h3>
          <div className="flex flex-col gap-2">
            <label htmlFor="projectName">Project Name</label>
            <input name="projectName" type="text" className="border" />
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default NewProjectModal;
