# 배포과정

## github.com에 배포

### 1. package.json 수정

- `homepage`: "https://zpdl95.github.io/chat-app" 추가

```json
{ "homepage": "https://zpdl95.github.io/chat-app" }
```

- `script 변경`

```json
 "scripts": {
    "build": "next build",
    "export": "next export",
    "predeploy": "rd /s/q out && npm run build && npm run export",
    "deploy": "echo > out/.nojekyll && git add -f out/ && git commit -m \"deploy to gh-pages\" && git subtree push --prefix out origin gh-pages"
  },
```

    next build : next 프로젝트 빌드
    next export : next 프로젝트를 static html앱으로 컴파일한 out/ 폴더를 생성해 줌
    touch out/.nojekyll : Github page의 jekyll 처리과정에서 _next 이러한 파일을 특수 리소스로 간주하고 최종 사이트에 복사하지 않는데 .nojekyll 파일을 만들면 이를 막을 수 있다.
    git add out/ : git add
    git commit -m : 커밋메시지 작성
    git subtree push —prefix out origin gh-pages : github 저장소 gh-pages브랜치에 push

### 2. next.config.js 수정

- `assetPrefix` 값 설정 = css적용경로
- `images` 값 설정 -> next/image컴포넌트 사용시
- `exportPathMap` 값 설정 -> next export를 사용해 static파일을 배포하면 route경로를 명시해 줘야함

```javascript
const repository = "https://zpdl95.github.io/chat-app";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  /* assetPrefix 설정은 css파일을 제대로 요청하기 위해 사용 */
  assetPrefix: process.env.NODE_ENV === "production" ? repository : "",
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
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
