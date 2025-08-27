/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.sellerpintar.com',
        pathname: '/articles/articles/*',
      },
    ],
  },
};

export default nextConfig;
