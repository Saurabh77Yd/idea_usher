import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        pathname: '/**', // allow all paths from this domain
      },
    ],
  },
};

export default nextConfig;
