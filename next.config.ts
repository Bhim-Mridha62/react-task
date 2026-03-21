import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/gamyan-product-list",
  assetPrefix: "/gamyan-product-list/",
};

export default nextConfig;