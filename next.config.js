const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '1024mb',
    },
  },
};

export default nextConfig;
