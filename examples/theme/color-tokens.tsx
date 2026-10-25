// 디자인 토큰: globals.css의 CSS 변수가 Tailwind 색상 유틸리티(bg-*, text-*)로 연결된다.
// 테마를 바꾸면 같은 클래스가 라이트/다크 값으로 자동 전환된다.
const tokens = [
  { name: "background", className: "bg-background" },
  { name: "foreground", className: "bg-foreground" },
  { name: "card", className: "bg-card" },
  { name: "primary", className: "bg-primary" },
  { name: "secondary", className: "bg-secondary" },
  { name: "muted", className: "bg-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "destructive", className: "bg-destructive" },
  { name: "border", className: "bg-border" },
  { name: "ring", className: "bg-ring" },
];

export default function ColorTokensExample() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {tokens.map((token) => (
        <div key={token.name} className="space-y-2">
          <div className={`h-12 rounded-md border ${token.className}`} />
          <p className="font-mono text-xs text-muted-foreground">
            {token.className}
          </p>
        </div>
      ))}
    </div>
  );
}
