import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL, ADMIN_URL } from "../constants";

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
        Promise.all(
          uploadedImages.map(
            async (img) =>
              await this.supabase
                .from("images")
                .insert([{ project_id: data?.[0].id, url: img.data?.path }])
          )
        );
      }
    } catch (error) {
      console.log(`createProject`);
      console.log(error);
    }
  }
}

export default new Supabase();
