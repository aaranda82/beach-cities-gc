import white3 from "../public/whiteKitchen3.jpg";
import white6 from "../public/whiteKitchen6.jpg";
import white7 from "../public/whiteKitchen7.jpg";
import blue3 from "../public/blueKitchen3.jpg";
import blue4 from "../public/blueKitchen4.jpg";
import blue6 from "../public/blueKitchen6.jpg";
import blue7 from "../public/blueKitchen7.jpg";
import bath1 from "../public/bathRoom1.jpg";
import bath2 from "../public/bathRoom2.jpg";
import { StaticImageData } from "next/image";

export type imageType = {
  src: StaticImageData;
  alt: string;
};

type ImagesType = imageType[][];

export const images: ImagesType = [
  [
    { src: white3, alt: "Kitchen with white cabines" },
    { src: white6, alt: "Kitchen with white cabines" },
    { src: white7, alt: "Kitchen with white cabines" },
  ],
  [
    { src: blue3, alt: "Kitchen with blue cabines" },
    { src: blue4, alt: "Kitchen with blue cabines" },
    { src: blue6, alt: "Kitchen with blue cabines" },
    { src: blue7, alt: "Kitchen with blue cabines" },
  ],
  [
    { src: bath1, alt: "Bathroom cabinets" },
    { src: bath2, alt: "Bathroom cabinets" },
  ],
];

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
