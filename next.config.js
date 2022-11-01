/** @type {import('next').NextConfig} */

const repository = "http://zpdl95.github.io/chat-app";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  assetPrefix: process.env.NODE_ENV === "production" ? repository : "",
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

module.exports = nextConfig;
