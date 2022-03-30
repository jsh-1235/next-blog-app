/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  assetPrefix: "https://~~~",
  // poweredByHeader: process.env.NODE_ENV === "development",
  // reactStrictMode: process.env.NODE_ENV === "development",
};

module.exports = nextConfig;
