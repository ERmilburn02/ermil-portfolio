/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "omzghbaynclzovwpxwwc.supabase.co",
        pathname: "/storage/v1/object/public/portfolio-public-data/images/**",
      },
    ],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);

// http://localhost:3000/(https://omzghbaynclzovwpxwwc.supabase.co/storage/v1/object/public/portfolio-public-data/images/dream-clicker/thumbnail.png)
