import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Props {
  items: {
    value: string
    trigger: string
    content: string
  }[]
}

function MdxAccordion({ items }: Props) {
  return (
    <Accordion type="single" collapsible className="mt-4 rounded-lg border">
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export { MdxAccordion }
