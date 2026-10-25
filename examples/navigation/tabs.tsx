import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// 탭: variant="line"으로 밑줄 스타일도 사용할 수 있다.
export default function TabsExample() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="password">비밀번호</TabsTrigger>
        <TabsTrigger value="notifications">알림</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="pt-2 text-muted-foreground">
        계정 정보를 수정합니다.
      </TabsContent>
      <TabsContent value="password" className="pt-2 text-muted-foreground">
        비밀번호를 변경합니다.
      </TabsContent>
      <TabsContent value="notifications" className="pt-2 text-muted-foreground">
        알림 수신 설정을 관리합니다.
      </TabsContent>
    </Tabs>
  );
}
