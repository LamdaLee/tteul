# 작은 정원, 뜰

> **뜰은 shaula.kr로 합쳐졌습니다.** 프로젝트 전시는 이제 [shaula.kr/case](https://shaula.kr/case)에서 관리합니다. 이 저장소의 배포 주소로 들어오면 `vercel.json`의 리다이렉트로 shaula.kr/case로 이동합니다. 아래 내용은 기록용으로 남겨 둡니다.

이람다(Shaula)가 만든 프로젝트와 자라나는 실험을 모으는 개인 포트폴리오입니다.

- **shaula.kr**: 나를 소개하고 생각과 활동을 기록하는 곳
- **뜰**: 직접 만든 프로젝트를 전시하고 새로운 웹 실험으로 연결하는 곳

Next.js 16 App Router, React 19, TypeScript로 구성합니다. 현재 전시 페이지는 DB와 환경 변수 없이 실행하며, 검색과 단계 필터, 프로젝트 상세 보기를 제공합니다.

## 로컬 실행

Node.js 24를 사용합니다.

```sh
npm ci
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 확인과 프로덕션 실행

```sh
npm run typecheck
npm run build
npm start
```

## 파일 구성

- `src/app/page.tsx`: 홈, 정원 소개와 공통 내비게이션
- `src/app/layout.tsx`: 한국어 문서와 검색 메타데이터
- `src/app/globals.css`: 반응형 스타일
- `src/lib/projects.ts`: 프로젝트 데이터와 검색·단계 필터
- `src/components/ProjectGarden.tsx`: 프로젝트 탐색과 상세 모달
- `src/components/ProjectPreview.tsx`: 프로젝트 미리보기
- `public/assets/`: 이미지와 Pretendard 글꼴 및 라이선스

프로젝트를 추가하거나 수정하려면 `src/lib/projects.ts`를 편집합니다. 실제 링크, 만든 이야기와 현재 단계를 함께 적습니다. `자라는 중`은 프로토타입, `활짝 핀`은 사용할 수 있는 프로젝트입니다.

작은 실험은 `src/app/lab/실험명/page.tsx`로 추가할 수 있습니다. 데이터 저장이 필요한 실험에만 DB를 도입하고, 독립적인 운영이 필요한 서비스는 별도 저장소와 배포로 분리합니다.

## Vercel 자동 배포

- GitHub 저장소: `LamdaLee/tteul`
- Vercel 팀과 프로젝트: `lamda7` / `tteul`
- Framework Preset: `Next.js`
- Root Directory: 저장소 루트
- Install Command: `npm ci`
- Build Command: `npm run build`
- Production Branch: `main`

Vercel의 GitHub 연결을 통해 `main` 업데이트는 프로덕션 배포, 다른 브랜치와 PR은 프리뷰 배포로 이어집니다. 별도 GitHub Actions 배포 작업이나 Vercel 토큰이 필요하지 않습니다. 배포 접근 보호는 Vercel 프로젝트 설정을 따릅니다.

기존 ChatGPT Sites 배포는 별도 사본이며 GitHub 커밋과 동기화되지 않습니다. 이후 운영 소스는 이 저장소를 기준으로 관리합니다.
