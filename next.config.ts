import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/XYIANSoftware/images/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/XYIANSoftware/images/**",
      },
    ],
  },
};

export default nextConfig;
