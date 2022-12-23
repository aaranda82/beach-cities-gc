import { StaticImageData } from "next/image";

export type imageType = {
  src: StaticImageData;
  alt: string;
};

type ImagesType = imageType[][];

export const images: ImagesType = [];

export const strings = {
  phone: "(310) 345 - 0523",
  email: "bobby@beachcitiesgc.com",
  licenseNumber: "Lic# 1068671",
};

export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_DEV_URL ??
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "";

export const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_DEV_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "";

export const ADMIN_URL = "http://localhost:3000/admin";
