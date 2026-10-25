import {
  Bell,
  Compass,
  Layers,
  PanelsTopLeft,
  Palette,
  Shapes,
  Table2,
  TextCursorInput,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ExampleCategory = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

// 예제 카테고리 정의: 목차와 사이드 내비게이션의 순서가 이 배열의 순서를 따른다.
export const categories = [
  {
    slug: "theme",
    title: "테마",
    description: "라이트/다크/시스템 테마 전환과 디자인 토큰(CSS 변수)을 확인합니다.",
    icon: Palette,
  },
  {
    slug: "basic",
    title: "기본 UI",
    description: "버튼, 배지, 카드, 아바타 등 모든 화면에서 쓰는 기본 컴포넌트입니다.",
    icon: Shapes,
  },
  {
    slug: "navigation",
    title: "내비게이션",
    description: "브레드크럼, 탭, 드롭다운 메뉴, 페이지네이션을 다룹니다.",
    icon: Compass,
  },
  {
    slug: "overlay",
    title: "오버레이",
    description: "다이얼로그, 시트, 팝오버, 툴팁처럼 화면 위에 뜨는 UI입니다.",
    icon: Layers,
  },
  {
    slug: "feedback",
    title: "피드백",
    description: "토스트, 알림, 진행률, 빈 상태, 에러 경계로 사용자에게 상태를 알립니다.",
    icon: Bell,
  },
  {
    slug: "forms",
    title: "폼",
    description: "입력 컴포넌트와 react-hook-form + zod 검증 폼 패턴입니다.",
    icon: TextCursorInput,
  },
  {
    slug: "data",
    title: "데이터 표시",
    description: "테이블, 검색 필터, 아코디언, 스크롤 영역 등 데이터를 보여주는 UI입니다.",
    icon: Table2,
  },
  {
    slug: "layout",
    title: "레이아웃",
    description: "컨테이너, 헤더, 푸터, 인증 셸, 사이드바 등 페이지 뼈대입니다.",
    icon: PanelsTopLeft,
  },
  {
    slug: "hooks",
    title: "훅·유틸",
    description: "usehooks-ts 훅, cn 유틸, lucide 아이콘 사용법입니다.",
    icon: Wrench,
  },
] as const satisfies readonly ExampleCategory[];

export type CategorySlug = (typeof categories)[number]["slug"];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
