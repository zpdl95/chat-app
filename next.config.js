/** @type {import('next').NextConfig} */

const repository = "https://chat-app-kappa-flame.vercel.app/";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: [repository],
    // domain: [repository], // 로컬파일을 사용하면 path, 외부파일을 사용하면 domain
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
