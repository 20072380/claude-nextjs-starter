import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

// Container는 최대 너비와 좌우 여백을, Section은 상하 여백과 Container를 함께 제공한다.
export default function ContainerSectionExample() {
  return (
    <div className="w-full space-y-4">
      <div className="rounded-md border bg-muted/40 py-4">
        <Container>
          <div className="rounded bg-primary/10 p-3 text-center text-sm">
            Container: max-w-6xl + 좌우 패딩
          </div>
        </Container>
      </div>
      <div className="rounded-md border bg-muted/40">
        <Section className="py-6 md:py-6">
          <div className="rounded bg-primary/10 p-3 text-center text-sm">
            Section: 상하 패딩 + Container 포함
          </div>
        </Section>
      </div>
    </div>
  );
}
