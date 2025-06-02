/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
