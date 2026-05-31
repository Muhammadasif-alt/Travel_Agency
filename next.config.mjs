import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.resolve(),
  images: {
    // Serve remote images directly. Next's image optimizer writes to
    // .next/cache/images, which fails on OneDrive (EINVAL readlink) and makes
    // images appear blank. Unsplash URLs are already sized via the u() helper.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
};

export default nextConfig;
