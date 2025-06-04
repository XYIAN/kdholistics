/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
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
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
