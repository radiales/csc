import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/csc",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
