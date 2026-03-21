import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/react-task",
  assetPrefix: "/react-task/",
};

export default nextConfig;