import React, { Dispatch, SetStateAction, useState } from "react";
import supabase from "../../services/supabase";
import Button from "../Button";
import BaseModal from "./BaseModal";
interface DeleteModalProps {
  setShowModal: Dispatch<SetStateAction<DeleteModalType>>;
  showModal: DeleteModalType;
  refresh: () => void;
}

export type DeleteModalType = {
  show: boolean;
  type: "" | "project" | "image";
  id: null | number;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  setShowModal,
  showModal,
  refresh,
}) => {
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  const handleCofirm = async () => {
    if (showModal.id) {
      if (showModal.type === "image") {
        await supabase.deleteImage(showModal.id);
      } else {
        await supabase.deleteProject(showModal.id);
      }
      setDeleteConfirmed(true);
      refresh();
    }
    setTimeout(() => {
      setShowModal({ ...showModal, show: false });
      setDeleteConfirmed(false);
    }, 1500);
  };

  return showModal.show ? (
    <BaseModal>
      <div className="p-10 flex items-center flex-col w-full gap-6">
        {deleteConfirmed ? (
          <h3 className="text-cyan-600 text 3xl font-bold text-center">
            Deleted!
          </h3>
        ) : (
          <>
            <div>{`Are you sure you want to delete this ${showModal.type}`}</div>
            <Button text="I'm sure" onClickFn={handleCofirm} />
          </>
        )}
      </div>
    </BaseModal>
  ) : null;
};

export default DeleteModal;
