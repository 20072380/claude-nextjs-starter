import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// 아코디언: 자주 묻는 질문처럼 내용을 접고 펼친다. multiple을 주면 여러 항목을 동시에 열 수 있다.
export default function AccordionExample() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>배송은 얼마나 걸리나요?</AccordionTrigger>
        <AccordionContent>
          주문 후 영업일 기준 2~3일 이내에 도착합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>환불이 가능한가요?</AccordionTrigger>
        <AccordionContent>
          수령 후 7일 이내에 미사용 상품에 한해 환불할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>해외 배송을 지원하나요?</AccordionTrigger>
        <AccordionContent>현재는 국내 배송만 지원합니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
