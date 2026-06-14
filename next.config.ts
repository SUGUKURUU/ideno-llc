import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/**`,
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
