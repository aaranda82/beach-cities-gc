import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../src/components/Button";
import FileUpload from "../../src/components/FileUpload";
import Logo from "../../src/components/Logo";

import SupabaseClient from "../../src/services/supabase";

const supabase = new SupabaseClient();

const Admin = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    supabase.getAuthUser().then(({ data, error }) => {
      if (!error) {
        setUser(data.user);
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Logo />
      {user ? (
        <div>
          <p>{user.id}</p>
          <p>{user.email}</p>
        </div>
      ) : null}

      <FileUpload />

      <Link href={"/"} className="mb-6">
        Go Back
      </Link>

      <Button
        secondary
        text="Sign Out"
        onClickFn={async () => {
          await supabase.signOut();
          router.push("/");
        }}
      />
    </div>
  );
};

export default Admin;
