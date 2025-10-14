/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
    // Ensure static images are served correctly
    domains: [],
  },
  // Ensure static files are served properly
  async headers() {
    return [
      {
        source: '/(.*\.(?:jpg|jpeg|png|gif|webp|avif|ico|svg))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
