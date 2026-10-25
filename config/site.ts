// 사이트 전역 설정: 새 프로젝트는 이 파일만 수정하면 브랜딩이 바뀐다.
export const siteConfig = {
  name: "Next Starter",
  description:
    "Next.js 16, TypeScript, Tailwind CSS, shadcn/ui로 만든 모던 웹 스타터킷입니다.",
  // 배포 환경에서는 NEXT_PUBLIC_SITE_URL 환경변수로 덮어쓴다.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "ko_KR",
  links: {
    github: "https://github.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
