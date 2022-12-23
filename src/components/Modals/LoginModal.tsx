import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import supabase from "../../services/supabase";
import BaseModal from "./BaseModal";

interface LoginModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const LoginModal: React.FC<LoginModalProps> = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmitError = (text: string) => {
    setError(text);
    setSubmitting(false);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    if (!email) return handleSubmitError("Email required");
    const { error } = await supabase.signInWithEmail(email);
    if (error) return handleSubmitError(error.message);
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    if (error) setError("");
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
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="email address">
                Email Address
              </label>
              <input
                type="email"
                className="border shadow-md p-2 rounded-md"
                placeholder="Email Address"
                onChange={handleChange}
                value={email}
                name="email address"
              />
              {error ? <p className="text-red-600 font-bold">{error}</p> : null}
            </div>
            {submitting ? (
              <p className="text-2xl font-medium text-cyan-600">
                Submitting...
              </p>
            ) : (
              <div className="w-full">
                <Button text="Log In" onClickFn={handleSubmit} />
              </div>
            )}
          </div>
        </div>
      )}
    </BaseModal>
  );
};

export default LoginModal;
