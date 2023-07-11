/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ["omzghbaynclzovwpxwwc.supabase.co"],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
