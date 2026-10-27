import type { ComponentType } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { CategorySlug } from "@/examples/categories";
import AvatarExample from "@/examples/basic/avatar";
import BadgeExample from "@/examples/basic/badge";
import ButtonStatesExample from "@/examples/basic/button-states";
import ButtonVariantsExample from "@/examples/basic/button-variants";
import CardExample from "@/examples/basic/card";
import SkeletonExample from "@/examples/basic/skeleton";
import SpinnerKbdSeparatorExample from "@/examples/basic/spinner-kbd-separator";
import AccordionExample from "@/examples/data/accordion";
import CollapsibleExample from "@/examples/data/collapsible";
import ScrollAreaExample from "@/examples/data/scroll-area";
import TableExample from "@/examples/data/table";
import TableSearchExample from "@/examples/data/table-search";
import AlertExample from "@/examples/feedback/alert";
import EmptyExample from "@/examples/feedback/empty";
import ErrorBoundaryExample from "@/examples/feedback/error-boundary";
import ProgressExample from "@/examples/feedback/progress";
import ToastExample from "@/examples/feedback/toast";
import CheckboxRadioSwitchExample from "@/examples/forms/checkbox-radio-switch";
import InputGroupExample from "@/examples/forms/input-group";
import InputTextareaExample from "@/examples/forms/input-textarea";
import RhfZodFormExample from "@/examples/forms/rhf-zod-form";
import SelectExample from "@/examples/forms/select";
import CnUtilityExample from "@/examples/hooks/cn-utility";
import LucideIconsExample from "@/examples/hooks/lucide-icons";
import UseCopyToClipboardExample from "@/examples/hooks/use-copy-to-clipboard";
import UseDebounceValueExample from "@/examples/hooks/use-debounce-value";
import UseLocalStorageExample from "@/examples/hooks/use-local-storage";
import UseMediaQueryExample from "@/examples/hooks/use-media-query";
import UseToggleCounterExample from "@/examples/hooks/use-toggle-counter";
import ContainerSectionExample from "@/examples/layout/container-section";
import PageHeaderExample from "@/examples/layout/page-header";
import BreadcrumbExample from "@/examples/navigation/breadcrumb";
import DropdownMenuExample from "@/examples/navigation/dropdown-menu";
import PaginationExample from "@/examples/navigation/pagination";
import TabsExample from "@/examples/navigation/tabs";
import AlertDialogExample from "@/examples/overlay/alert-dialog";
import DialogExample from "@/examples/overlay/dialog";
import PopoverExample from "@/examples/overlay/popover";
import SheetExample from "@/examples/overlay/sheet";
import TooltipExample from "@/examples/overlay/tooltip";
import ColorTokensExample from "@/examples/theme/color-tokens";
import ThemeSwitcherExample from "@/examples/theme/theme-switcher";

export type ExampleMeta = {
  id: string;
  category: CategorySlug;
  title: string;
  description: string;
  // 코드 탭에 표시할 실제 파일 경로 (프로젝트 루트 기준)
  file: string;
  // 미리보기로 렌더링할 컴포넌트 (소스만 보여주는 예제는 생략)
  component?: ComponentType;
  // 전체 화면 레이아웃처럼 미리보기가 어려운 경우 실제 페이지로 연결한다.
  liveHref?: string;
};

// 실제 경로로 확인하는 화면: 예제의 liveHref와 /examples 목차의 "실제 화면 보기"가 함께 쓴다.
export const liveRoutes = {
  login: { href: "/login", label: "로그인 화면" },
  dashboard: { href: "/dashboard", label: "대시보드 화면" },
  // 존재하지 않는 경로로, 404 화면을 보여주기 위한 의도된 링크다.
  notFound: { href: "/this-page-does-not-exist", label: "404 화면" },
} as const;

// 예제 등록: 새 예제는 파일을 만든 뒤 이 배열에 항목을 추가하면 된다.
export const examples: ExampleMeta[] = [
  // 테마
  {
    id: "theme-switcher",
    category: "theme",
    title: "테마 전환",
    description: "next-themes의 useTheme으로 라이트/다크/시스템 테마를 전환합니다.",
    file: "examples/theme/theme-switcher.tsx",
    component: ThemeSwitcherExample,
  },
  {
    id: "color-tokens",
    category: "theme",
    title: "색상 토큰",
    description: "CSS 변수 기반 색상 토큰이 테마에 따라 자동으로 바뀝니다.",
    file: "examples/theme/color-tokens.tsx",
    component: ColorTokensExample,
  },

  // 기본 UI
  {
    id: "button-variants",
    category: "basic",
    title: "버튼 변형과 크기",
    description: "variant와 size 조합으로 다양한 버튼을 만듭니다.",
    file: "examples/basic/button-variants.tsx",
    component: ButtonVariantsExample,
  },
  {
    id: "button-states",
    category: "basic",
    title: "버튼 상태",
    description: "아이콘, 로딩, 비활성화, 링크 버튼 패턴입니다.",
    file: "examples/basic/button-states.tsx",
    component: ButtonStatesExample,
  },
  {
    id: "badge",
    category: "basic",
    title: "배지",
    description: "상태와 카테고리를 표시하는 작은 라벨입니다.",
    file: "examples/basic/badge.tsx",
    component: BadgeExample,
  },
  {
    id: "card",
    category: "basic",
    title: "카드",
    description: "제목, 설명, 액션, 본문, 푸터로 구성된 카드입니다.",
    file: "examples/basic/card.tsx",
    component: CardExample,
  },
  {
    id: "avatar",
    category: "basic",
    title: "아바타",
    description: "사용자 이미지 또는 이니셜을 표시하고 그룹으로 묶습니다.",
    file: "examples/basic/avatar.tsx",
    component: AvatarExample,
  },
  {
    id: "skeleton",
    category: "basic",
    title: "스켈레톤",
    description: "로딩 중 레이아웃을 유지하는 자리표시자입니다.",
    file: "examples/basic/skeleton.tsx",
    component: SkeletonExample,
  },
  {
    id: "spinner-kbd-separator",
    category: "basic",
    title: "스피너 · Kbd · 구분선",
    description: "로딩 표시, 단축키 표기, 가로/세로 구분선입니다.",
    file: "examples/basic/spinner-kbd-separator.tsx",
    component: SpinnerKbdSeparatorExample,
  },

  // 내비게이션
  {
    id: "breadcrumb",
    category: "navigation",
    title: "브레드크럼",
    description: "현재 위치를 계층으로 보여줍니다.",
    file: "examples/navigation/breadcrumb.tsx",
    component: BreadcrumbExample,
  },
  {
    id: "tabs",
    category: "navigation",
    title: "탭",
    description: "같은 영역의 콘텐츠를 탭으로 전환합니다.",
    file: "examples/navigation/tabs.tsx",
    component: TabsExample,
  },
  {
    id: "dropdown-menu",
    category: "navigation",
    title: "드롭다운 메뉴",
    description: "라벨, 아이콘, 구분선, 위험 항목을 갖춘 메뉴입니다.",
    file: "examples/navigation/dropdown-menu.tsx",
    component: DropdownMenuExample,
  },
  {
    id: "pagination",
    category: "navigation",
    title: "페이지네이션",
    description: "현재 페이지 상태와 연동되는 페이지 이동 UI입니다.",
    file: "examples/navigation/pagination.tsx",
    component: PaginationExample,
  },

  // 오버레이
  {
    id: "dialog",
    category: "overlay",
    title: "다이얼로그",
    description: "화면 중앙에 뜨는 모달 창입니다.",
    file: "examples/overlay/dialog.tsx",
    component: DialogExample,
  },
  {
    id: "alert-dialog",
    category: "overlay",
    title: "알림 다이얼로그",
    description: "삭제 같은 위험한 작업 전에 확인을 받습니다.",
    file: "examples/overlay/alert-dialog.tsx",
    component: AlertDialogExample,
  },
  {
    id: "sheet",
    category: "overlay",
    title: "시트",
    description: "화면 가장자리에서 밀려 나오는 패널입니다. 4방향을 지원합니다.",
    file: "examples/overlay/sheet.tsx",
    component: SheetExample,
  },
  {
    id: "popover",
    category: "overlay",
    title: "팝오버",
    description: "트리거 근처에 뜨는 작은 입력 패널입니다.",
    file: "examples/overlay/popover.tsx",
    component: PopoverExample,
  },
  {
    id: "tooltip",
    category: "overlay",
    title: "툴팁",
    description: "마우스를 올리거나 포커스하면 보조 설명을 보여줍니다.",
    file: "examples/overlay/tooltip.tsx",
    component: TooltipExample,
  },

  // 피드백
  {
    id: "toast",
    category: "feedback",
    title: "토스트",
    description: "sonner로 성공, 에러, Promise, 실행 취소 알림을 띄웁니다.",
    file: "examples/feedback/toast.tsx",
    component: ToastExample,
  },
  {
    id: "alert",
    category: "feedback",
    title: "알림 (Alert)",
    description: "페이지 안에 고정으로 표시하는 안내와 오류 메시지입니다.",
    file: "examples/feedback/alert.tsx",
    component: AlertExample,
  },
  {
    id: "progress",
    category: "feedback",
    title: "진행률",
    description: "useInterval과 함께 진행 상태를 표시합니다.",
    file: "examples/feedback/progress.tsx",
    component: ProgressExample,
  },
  {
    id: "empty",
    category: "feedback",
    title: "빈 상태",
    description: "데이터가 없을 때 다음 행동을 안내합니다.",
    file: "examples/feedback/empty.tsx",
    component: EmptyExample,
  },
  {
    id: "error-boundary",
    category: "feedback",
    title: "에러 경계",
    description: "react-error-boundary로 컴포넌트 단위 에러를 격리하고 재시도합니다.",
    file: "examples/feedback/error-boundary.tsx",
    component: ErrorBoundaryExample,
  },

  // 폼
  {
    id: "input-textarea",
    category: "forms",
    title: "입력 필드",
    description: "Field로 라벨, 입력, 설명을 일관되게 구성합니다.",
    file: "examples/forms/input-textarea.tsx",
    component: InputTextareaExample,
  },
  {
    id: "select",
    category: "forms",
    title: "셀렉트",
    description: "items로 선택한 항목의 라벨을 표시하는 셀렉트입니다.",
    file: "examples/forms/select.tsx",
    component: SelectExample,
  },
  {
    id: "checkbox-radio-switch",
    category: "forms",
    title: "체크박스 · 라디오 · 스위치",
    description: "다중 선택, 단일 선택, on/off 입력입니다.",
    file: "examples/forms/checkbox-radio-switch.tsx",
    component: CheckboxRadioSwitchExample,
  },
  {
    id: "input-group",
    category: "forms",
    title: "입력 그룹",
    description: "아이콘, 접두 텍스트, 버튼을 입력창에 붙입니다.",
    file: "examples/forms/input-group.tsx",
    component: InputGroupExample,
  },
  {
    id: "rhf-zod-form",
    category: "forms",
    title: "react-hook-form + zod 폼",
    description: "검증 에러 표시와 제출 토스트를 갖춘 문의 폼입니다. 빈 값으로 제출해 보세요.",
    file: "examples/forms/rhf-zod-form.tsx",
    component: RhfZodFormExample,
  },

  // 데이터 표시
  {
    id: "table",
    category: "data",
    title: "테이블",
    description: "캡션, 헤더, 배지를 갖춘 기본 테이블입니다.",
    file: "examples/data/table.tsx",
    component: TableExample,
  },
  {
    id: "table-search",
    category: "data",
    title: "검색 가능한 테이블",
    description: "useDebounceValue로 입력이 멈춘 뒤 필터링하고, 결과가 없으면 빈 상태를 보여줍니다.",
    file: "examples/data/table-search.tsx",
    component: TableSearchExample,
  },
  {
    id: "accordion",
    category: "data",
    title: "아코디언",
    description: "자주 묻는 질문처럼 내용을 접고 펼칩니다.",
    file: "examples/data/accordion.tsx",
    component: AccordionExample,
  },
  {
    id: "collapsible",
    category: "data",
    title: "접이식 영역",
    description: "하나의 영역을 열고 닫습니다.",
    file: "examples/data/collapsible.tsx",
    component: CollapsibleExample,
  },
  {
    id: "scroll-area",
    category: "data",
    title: "스크롤 영역",
    description: "높이를 제한한 목록에 일관된 스크롤바를 적용합니다.",
    file: "examples/data/scroll-area.tsx",
    component: ScrollAreaExample,
  },

  // 레이아웃
  {
    id: "container-section",
    category: "layout",
    title: "Container · Section",
    description: "콘텐츠 너비와 섹션 여백을 통일하는 기본 레이아웃 블록입니다.",
    file: "examples/layout/container-section.tsx",
    component: ContainerSectionExample,
  },
  {
    id: "page-header",
    category: "layout",
    title: "PageHeader",
    description: "페이지 제목, 설명, 액션 슬롯을 구성합니다.",
    file: "examples/layout/page-header.tsx",
    component: PageHeaderExample,
  },
  {
    id: "site-header",
    category: "layout",
    title: "SiteHeader",
    description: "마케팅 영역 상단 헤더입니다. 실제 컴포넌트가 그대로 렌더링됩니다.",
    file: "components/layout/site-header.tsx",
    component: SiteHeader,
  },
  {
    id: "site-footer",
    category: "layout",
    title: "SiteFooter",
    description: "마케팅 영역 하단 푸터입니다. 실제 컴포넌트가 그대로 렌더링됩니다.",
    file: "components/layout/site-footer.tsx",
    component: SiteFooter,
  },
  {
    id: "auth-shell",
    category: "layout",
    title: "AuthShell",
    description: "인증 화면 공통 셸입니다. 전체 화면 레이아웃이라 실제 화면에서 확인합니다.",
    file: "components/layout/auth-shell.tsx",
    liveHref: liveRoutes.login.href,
  },
  {
    id: "app-sidebar",
    category: "layout",
    title: "AppSidebar",
    description: "대시보드 사이드바입니다. 전체 화면 레이아웃이라 실제 화면에서 확인합니다.",
    file: "components/layout/app-sidebar.tsx",
    liveHref: liveRoutes.dashboard.href,
  },

  // 훅·유틸
  {
    id: "use-copy-to-clipboard",
    category: "hooks",
    title: "useCopyToClipboard",
    description: "클립보드 복사와 결과 처리입니다.",
    file: "examples/hooks/use-copy-to-clipboard.tsx",
    component: UseCopyToClipboardExample,
  },
  {
    id: "use-local-storage",
    category: "hooks",
    title: "useLocalStorage",
    description: "값을 localStorage에 저장해 새로고침 후에도 유지합니다.",
    file: "examples/hooks/use-local-storage.tsx",
    component: UseLocalStorageExample,
  },
  {
    id: "use-debounce-value",
    category: "hooks",
    title: "useDebounceValue",
    description: "입력이 멈춘 뒤에만 값을 갱신합니다.",
    file: "examples/hooks/use-debounce-value.tsx",
    component: UseDebounceValueExample,
  },
  {
    id: "use-media-query",
    category: "hooks",
    title: "useMediaQuery",
    description: "화면 크기와 OS 설정에 따라 UI를 분기합니다.",
    file: "examples/hooks/use-media-query.tsx",
    component: UseMediaQueryExample,
  },
  {
    id: "use-toggle-counter",
    category: "hooks",
    title: "useToggle · useCounter",
    description: "boolean 토글과 숫자 증감 헬퍼입니다.",
    file: "examples/hooks/use-toggle-counter.tsx",
    component: UseToggleCounterExample,
  },
  {
    id: "cn-utility",
    category: "hooks",
    title: "cn 유틸",
    description: "조건부 클래스를 합치고 충돌하는 Tailwind 클래스를 정리합니다.",
    file: "examples/hooks/cn-utility.tsx",
    component: CnUtilityExample,
  },
  {
    id: "lucide-icons",
    category: "hooks",
    title: "lucide 아이콘",
    description: "필요한 아이콘만 import해 크기와 색을 클래스로 지정합니다.",
    file: "examples/hooks/lucide-icons.tsx",
    component: LucideIconsExample,
  },
];

export function getExamplesByCategory(category: CategorySlug) {
  return examples.filter((example) => example.category === category);
}
