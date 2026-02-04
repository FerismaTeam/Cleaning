import type { NextConfig } from "next";

const repo = 'Cleaning';

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
      optimizePackageImports: ["@chakra-ui/react"],
    },
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    output: "export",
    images: {
      unoptimized: true // required for github pages
    }
};

export default nextConfig;
