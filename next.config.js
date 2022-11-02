/** @type {import('next').NextConfig} */

const repository = "https://zpdl95.github.io/chat-app";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  /* assetPrefix 설정은 css파일을 제대로 요청하기 위해 사용 */
  assetPrefix: process.env.NODE_ENV === "production" ? repository : "",
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
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
