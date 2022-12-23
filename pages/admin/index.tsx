import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spacer } from "..";
import Button from "../../src/components/Button";
import FileUpload from "../../src/components/FileUpload";
import Logo from "../../src/components/Logo";
import NewProjectModal from "../../src/components/Modals/NewProjectModal";
import supabase from "../../src/services/supabase";

const Admin = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const goHome = () => router.push("/");

  useEffect(() => {
    supabase.getAuthUser().then(({ data, error }) => {
      if (!data.user) goHome();
      if (!error) {
        setUser(data.user);
        setLoading(false);
      }
    });
  }, []);

  return loading ? (
    <div className="flex justify-center items-center h-screen w-full">
      <h2 className="text-2xl font-bold text-cyan-600">Loading...</h2>
    </div>
  ) : (
    <div className="flex flex-col items-center">
      {showModal ? <NewProjectModal setShowModal={setShowModal} /> : null}
      <div className="flex justify-around items-center w-full py-4">
        <Logo customWidth={150} />
        <Button
          secondary
          text="Sign Out"
          onClickFn={async () => {
            await supabase.signOut();
            goHome();
          }}
        />
      </div>
      <Spacer />
      <div className="flex flex-col items-center w-full py-4">
        <Button
          text="Add Project"
          onClickFn={() => {
            setShowModal(true);
          }}
        />
        <Link href={"/"} className="mb-6">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Admin;
