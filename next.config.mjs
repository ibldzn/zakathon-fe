/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "static.cdntap.com" }],
  },
};

export default nextConfig;
