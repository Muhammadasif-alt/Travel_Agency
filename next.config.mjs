import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.resolve(),
  images: {
    // Images are local (/public/images). Next's optimizer writes to
    // .next/cache/images, which fails on OneDrive (EINVAL readlink) and makes
    // images appear blank — so serve files directly.
    unoptimized: true,
    remotePatterns: [
      // Only used for generated team-member initial avatars.
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
};

export default nextConfig;
