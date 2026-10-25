import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 제목, 설명, 액션, 본문, 푸터를 갖춘 카드
export default function CardExample() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>프로 플랜</CardTitle>
        <CardDescription>팀 협업에 필요한 모든 기능</CardDescription>
        <CardAction>
          <Badge variant="secondary">추천</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">
          9,900원<span className="text-sm font-normal text-muted-foreground"> / 월</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">시작하기</Button>
      </CardFooter>
    </Card>
  );
}
