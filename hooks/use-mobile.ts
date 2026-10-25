import { useMediaQuery } from "usehooks-ts";

const MOBILE_BREAKPOINT = 768;

// 모바일 여부 판단: 직접 구현 대신 검증된 usehooks-ts의 useMediaQuery를 사용한다.
// 서버/클라이언트 첫 렌더링 결과를 맞추기 위해 초기값은 false로 두고 마운트 후 갱신한다.
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`, {
    initializeWithValue: false,
  });
}
