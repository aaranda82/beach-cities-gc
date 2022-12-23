/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "cskrzfgdssxcklhfubjn.supabase.co",
      },
      {
        hostname: "localhost",
      },
    ],
  },
};
