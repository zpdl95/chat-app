# 배포과정

## Vercel에 배포

### 1. package.json 수정

- `script 변경`

```json
 "scripts": {
    "build": "next build",
    "export": "next export",
    "vercel-deploy": "next build && next export"
  },
```

    next build : next 프로젝트 빌드
    next export : next 프로젝트를 static html앱으로 컴파일한 out/ 폴더를 생성해 줌

### 2. next.config.js 수정

- `images` 값 설정 -> next/image컴포넌트 사용시
- `exportPathMap` 값 설정 -> next export를 사용해 static파일을 배포하면 route경로를 명시해 줘야함

```javascript
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
```
