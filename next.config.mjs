/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.dog.ceo" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "rakawc.com" },
    ],
  },
};

export default nextConfig;
