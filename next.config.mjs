// ✅ replace your entire next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.2.35", "10.21.237.247", "192.168.2.58"],
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"], // auto converts PNG → webp/avif
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // minimumCacheTTL: 60 * 60 * 24 * 30, // cache 30 days
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
