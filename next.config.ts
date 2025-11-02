import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ar"],       // Default Arabic language
    defaultLocale: "ar",
  },
};

export default nextConfig;
