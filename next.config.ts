import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        pino: false,
        "pino-pretty": false,
      };
    }
    return config;
  },
};

export default nextConfig;
