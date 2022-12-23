import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import supabase from "../../services/supabase";
import BaseModal from "./BaseModal";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ErrorText } from "../Utils";

interface DevLoginModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

interface Inputs {
  email: string;
  password: string;
}

const DevLoginModal: React.FC<DevLoginModalProps> = ({ setShowModal }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setSubmitting(true);
    const { data, error } = await supabase.signInWithPassword(
      formData.email,
      formData.password
    );
    if (error) setError(error.message);
    if (data.user?.role === "authenticated") router.push("/admin");
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const SuccessText = () => (
    <div className="flex flex-col gap-8 p-10 items-center w-full">
      <h3 className="text-xl">
        Check your email for a link to access the portal
      </h3>
      <Button text="Close" onClickFn={handleClose} />
    </div>
  );

  return (
    <BaseModal>
      {submitted && !error ? (
        <SuccessText />
      ) : (
        <div className="p-10 flex items-center flex-col w-full gap-6">
          <div className="w-full flex justify-end">
            <Button text="Close" onClickFn={handleClose} plain />
          </div>
          <div className="flex flex-col items-center gap-10">
            <h3
              className="text-2xl font-medium leading-6 text-cyan-600"
              id="modal-title"
            >
              Log In
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2 mb-6">
                <label className="font-bold" htmlFor="email address">
                  Email Address
                </label>
                <input
                  className="border shadow-md p-2 rounded-md"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                />
                <label className="font-bold" htmlFor="email address">
                  Password
                </label>
                <input
                  type="passowrd"
                  className="border shadow-md p-2 rounded-md"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <ErrorText error={error} />
                <ErrorText error={errors.email?.message} />
                <ErrorText error={errors.password?.message} />
              </div>
              {submitting ? (
                <p className="text-2xl font-medium text-cyan-600">
                  Submitting...
                </p>
              ) : (
                <div className="w-full">
                  <Button text="Log In" submit />
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </BaseModal>
  );
};

export default DevLoginModal;
