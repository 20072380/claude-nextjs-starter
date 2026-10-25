import { readFile } from "node:fs/promises";
import path from "node:path";

import { codeToHtml } from "shiki";

// 예제 소스로 노출을 허용하는 프로젝트 내 경로
const allowedRoots = ["examples/", "components/"];

export type ExampleSource = {
  // 복사 버튼에 사용할 원본 코드
  code: string;
  // shiki로 하이라이트한 HTML (라이트/다크 듀얼 테마, CSS 변수 방식)
  html: string;
};

// 경로 탈출(..)이나 허용 범위 밖 파일 접근을 막는다.
function assertSafePath(file: string) {
  const isAllowed = allowedRoots.some((root) => file.startsWith(root));
  if (!isAllowed || file.includes("..")) {
    throw new Error(`예제 소스로 사용할 수 없는 경로입니다: ${file}`);
  }
}

// 예제 파일을 읽어 하이라이트한다.
// 빌드 시 한 번만 실행되도록 캐시한다(Cache Components). 반환값은 문자열이라 직렬화된다.
export async function getExampleSource(file: string): Promise<ExampleSource> {
  "use cache";

  assertSafePath(file);

  let code: string;
  try {
    // 읽기는 빌드 시점에만 실행되고 결과가 캐시되므로, 프로젝트 전체가 서버 번들에
    // 추적·포함되지 않도록 Turbopack 추적에서 제외한다.
    code = await readFile(
      path.join(/*turbopackIgnore: true*/ process.cwd(), file),
      "utf8",
    );
  } catch (error) {
    throw new Error(`예제 소스를 읽지 못했습니다: ${file}`, { cause: error });
  }

  const html = await codeToHtml(code.trimEnd(), {
    lang: file.endsWith(".tsx") ? "tsx" : "ts",
    themes: { light: "github-light", dark: "github-dark" },
    // 배경과 글자색은 globals.css에서 CSS 변수로 제어한다.
    defaultColor: false,
  });

  return { code, html };
}
