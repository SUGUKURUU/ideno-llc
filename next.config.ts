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
        // SNS運用代行のLP
        source: "/services/sns",
        destination: "/services/sns-daiko",
        permanent: true,
      },
      {
        // 旧URLからの転送
        source: "/sns",
        destination: "/services/sns-daiko",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
