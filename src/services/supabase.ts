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

  async signOut() {
    return await this.supabase.auth.signOut();
  }

  async getAuthUser() {
    return await this.supabase.auth.getUser();
  }

  async getUserInfo() {
    return await this.supabase.from("users").select("*");
  }

  async uploadImage(path: string, fileBody: Blob) {
    return await this.supabase.storage
      .from("images")
      .upload(`public/${path}`, fileBody);
  }

  getImage(path: string) {
    return this.supabase.storage.from("images").getPublicUrl(path);
  }
}

export default new Supabase();
