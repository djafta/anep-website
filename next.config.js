const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.anep.gov.mz",
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
