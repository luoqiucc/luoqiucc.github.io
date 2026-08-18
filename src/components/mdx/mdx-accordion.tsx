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
    <Accordion>
      {items.map((item) => (
        <AccordionItem value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export { MdxAccordion }
