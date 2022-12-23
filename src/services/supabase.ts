import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Project } from "../../types";
import {
  SUPABASE_KEY,
  SUPABASE_URL,
  ADMIN_URL,
  SUPABASE_IMAGE_URL,
} from "../constants";

// Create a single supabase client for interacting with your database

class Supabase {
  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }
  supabase: SupabaseClient<any, "public", any>;

  async signInWithEmail(email: string) {
    return await this.supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: ADMIN_URL,
      },
    });
  }

  async signInWithPassword(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    return await this.supabase.auth.signOut();
  }

  async updateMetadata(name: string) {
    return await this.supabase.auth.updateUser({ data: { name } });
  }

  async getAuthUser() {
    return await this.supabase.auth.getUser();
  }

  async getUserInfo() {
    return await this.supabase.from("users").select("*");
  }

  async uploadImage(path: string, fileBody: Blob) {
    return await this.supabase.storage.from("images").upload(path, fileBody);
  }

  async createProject(
    project: { name: string; description?: string },
    files: FileList
  ) {
    try {
      const { data, error } = await this.supabase
        .from("projects")
        .insert([{ title: project.name, description: project.description }])
        .select("*");
      if (error) throw new Error(error.message);
      const arr = Array.from(files);
      const uploadedImages = await Promise.all(
        arr.map(
          async (file, index) =>
            await this.supabase.storage
              .from("images")
              .upload(file.name, files.item(index)!)
        )
      );

      if (data && data?.length && uploadedImages.length) {
        await Promise.all(
          uploadedImages.map(
            async (img) =>
              await this.supabase
                .from("images")
                .insert([{ project_id: data?.[0].id, url: img.data?.path }])
          )
        );
        return await this.supabase
          .from("projects")
          .select("id")
          .eq("id", data?.[0].id);
      }
    } catch (error) {
      console.log(`createProject`);
      console.log(error);
    }
  }

  async getProjects(): Promise<Project[]> {
    const proj = await this.supabase.from("projects").select("*");
    const img = await this.supabase.from("images").select("*");
    if (proj.data && img.data) {
      const projects = proj.data.map((p) => {
        const images = img.data.filter((i) => i.project_id === p.id);
        return {
          id: p.id,
          title: p.title,
          images: images.map((i) => ({
            src: SUPABASE_IMAGE_URL + i.url,
            id: i.id,
          })),
        };
      });
      return projects.filter((p) => p.images.length);
    }
    return [];
  }

  async deleteImage(id: number) {
    try {
      const { data, error } = await this.supabase
        .from("images")
        .select("url")
        .eq("id", id);
      if (error) throw new Error(error.message);
      if (data) {
        await this.supabase.storage.from("images").remove([data[0].url]);
        await this.supabase.from("images").delete().match({ id });
      }
    } catch (error) {
      console.log("Delete Image Error");
      console.log(error);
    }
  }

  async deleteProject(id: number) {
    const res = await this.supabase
      .from("images")
      .select("url")
      .eq("project_id", id);
    if (res.data) {
      const imagesToRemove: string[] = res.data?.map((image) => image.url);
      await this.supabase.storage.from("images").remove(imagesToRemove);
      await this.supabase.from("images").delete().match({ project_id: id });
      await this.supabase.from("projects").delete().match({ id });
    }
  }
}

export default new Supabase();
