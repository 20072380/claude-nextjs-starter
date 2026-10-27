// Claude Code 훅 → 파일 수정 후 ESLint 검사 (PostToolUse, Edit|Write)
// .ts/.tsx 파일만 검사하며, 오류가 있으면 exit 2 + stderr 로 Claude 에게 전달한다.
// --fix 는 쓰지 않는다 (훅이 파일을 바꾸면 이후 Edit 이 실패할 수 있음).
// 훅 자체의 문제(ESLint 실행 실패 등)는 작업을 막지 않도록 exit 0 으로 종료한다.
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join, relative, isAbsolute, resolve } from "node:path";

const targetExtensions = [".ts", ".tsx"];
const ignoredDirs = ["node_modules", ".next"];

// stdin 전체를 읽어 JSON으로 파싱
async function readInput() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

// 검사 대상 파일인지 판단: 확장자, 무시 디렉터리, 프로젝트 내부 여부, 존재 여부
function isTarget(filePath, projectDir) {
  if (!targetExtensions.some((ext) => filePath.endsWith(ext))) return false;
  if (!existsSync(filePath)) return false;
  const rel = relative(projectDir, filePath);
  if (rel.startsWith("..") || isAbsolute(rel)) return false;
  return !rel.split(/[\\/]/).some((part) => ignoredDirs.includes(part));
}

async function main() {
  const input = await readInput();
  const rawPath = input.tool_input?.file_path;
  if (!rawPath) return;

  const projectDir = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
  const filePath = resolve(projectDir, rawPath);
  if (!isTarget(filePath, projectDir)) return;

  const eslintBin = join(projectDir, "node_modules", "eslint", "bin", "eslint.js");
  if (!existsSync(eslintBin)) return;

  // 셸을 거치지 않고 node 로 직접 실행 (Windows 에서도 안전)
  const result = spawnSync(process.execPath, [eslintBin, filePath], {
    cwd: projectDir,
    encoding: "utf8",
    timeout: 50000,
  });

  // exit 1 = lint 오류. 그 외(0 통과, 2 설정 오류, 실행 실패)는 막지 않는다.
  if (result.status === 1) {
    process.stderr.write(`ESLint 오류가 있습니다: ${relative(projectDir, filePath)}\n${result.stdout}`);
    process.exit(2);
  }
}

main()
  .catch(() => {})
  .then(() => process.exit(process.exitCode ?? 0));
