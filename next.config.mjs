/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // @vercel/blob pulls undici with private class fields that webpack on Next 14 can't parse
    serverComponentsExternalPackages: ["@vercel/blob", "undici"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];

      if (Array.isArray(config.externals)) {
        config.externals.push("@vercel/blob", "undici");
      }
    }

    return config;
  },
};

export default nextConfig;
