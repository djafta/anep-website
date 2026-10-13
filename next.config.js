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
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
        }
      ]
    }
  ]
};

export default nextConfig;
