import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/website",
        destination: "/services/website",
        permanent: true,
      },
      {
        // SNS運用代行のLPはトップページが兼ねているため集約
        source: "/services/sns",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
