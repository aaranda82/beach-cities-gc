import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spacer } from "..";
import Button from "../../src/components/Button";
import Logo from "../../src/components/Logo";
import DeleteModal, {
  DeleteModalType,
} from "../../src/components/Modals/DeleteModal";
import NewProjectModal from "../../src/components/Modals/NewProjectModal";
import ProjectPhoto from "../../src/components/ProjectPhoto";
import supabase from "../../src/services/supabase";
import { Image, Project } from "../../types";

const renderImages = (images: Image[], deleteImage: (id: number) => void) =>
  images.map((img, index) => (
    <div key={index} className="relative">
      <ProjectPhoto src={img.src} />
      <div
        className="absolute top-4 left-4 cursor-pointer"
        onClick={() => deleteImage(img.id)}
      >
        X
      </div>
    </div>
  ));

const Admin = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showNewProjModal, setShowNewProjModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState<DeleteModalType>({
    show: false,
    type: "",
    id: null,
  });
  const [projects, setProjects] = useState<Project[]>([]);

  const goHome = () => router.push("/");

  const refreshProjects = async () => {
    const projRes = await supabase.getProjects();
    setProjects(projRes);
  };

  const deleteProject = async (id: number) => {
    setShowDeleteModal({ show: true, type: "project", id });
  };

  const deleteImage = (id: number) => {
    setShowDeleteModal({ show: true, type: "image", id });
  };

  useEffect(() => {
    supabase.getAuthUser().then(({ data, error }) => {
      if (!data.user) goHome();
      refreshProjects();
      if (!error) {
        setUser(data.user);
        setLoading(false);
      }
    });
  }, []);

  const section = "flex flex-col gap-4 w-1/2 bg-amber-200 p-8 rounded-lg";

  return loading ? (
    <div className="flex justify-center items-center h-screen w-full">
      <h2 className="text-2xl font-bold text-cyan-600">Loading...</h2>
    </div>
  ) : (
    <div className="flex flex-col items-center">
      {showNewProjModal ? (
        <NewProjectModal
          setShowModal={setShowNewProjModal}
          refresh={refreshProjects}
        />
      ) : null}
      <DeleteModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        refresh={refreshProjects}
      />
      <div className="flex justify-around items-center w-full py-4">
        <Logo customWidth={150} />
        <div>
          <p className="font-bold text-2xl text-center text-cyan-600 mb-4">{`Hi ${
            user?.user_metadata.name ? user?.user_metadata.name : "Bobby"
          }`}</p>
          <div>
            <Button
              secondary
              text="Sign Out"
              onClickFn={async () => {
                await supabase.signOut();
                goHome();
              }}
            />
          </div>
        </div>
      </div>
      <Spacer />
      <div className="flex flex-col items-center w-full py-4">
        <div className="flex justify-end w-full px-8">
          <Button
            text="Add Project"
            onClickFn={() => {
              setShowNewProjModal(true);
            }}
          />
        </div>
        <div className="flex items-center flex-col gap-6">
          {projects.map((p) => (
            <div key={p.id} className={section}>
              <Button
                text="Delete Project"
                onClickFn={() => deleteProject(p.id)}
              />
              {renderImages(p.images, deleteImage)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
