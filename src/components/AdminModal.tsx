import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "./Button";
import SupabaseClient from "../services/supabase";

interface AdminModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const supabase = new SupabaseClient();

const AdminModal: React.FC<AdminModalProps> = ({ setShowModal }) => {
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

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
            <div className="bg-white ">
              <div className="sm:flex sm:items-start">
                {submitted && !error ? (
                  <div className="flex flex-col gap-8 p-10 items-center w-full">
                    <h3 className="text-xl">
                      Check your email for a link to access the portal
                    </h3>
                    <Button text="Close" onClickFn={handleClose} />
                  </div>
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
                        {error ? (
                          <p className="text-red-600 font-bold">{error}</p>
                        ) : null}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
