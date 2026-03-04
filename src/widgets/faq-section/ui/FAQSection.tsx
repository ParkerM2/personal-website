import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SectionLabel,
} from "@/shared/ui"

const faqItems = [
  {
    question: "What technologies do you work with?",
    answer:
      "I specialize in React, TypeScript, Node.js, and modern web technologies. I also work with AI/ML tools and cloud infrastructure.",
  },
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes! I'm open to freelance projects, consulting, and collaboration opportunities. Feel free to reach out.",
  },
  {
    question: "What's your development process?",
    answer:
      "I follow an agile approach with iterative development, regular communication, and a focus on delivering quality code.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Absolutely. I provide maintenance, updates, and support for projects I've built.",
  },
]

export function FAQSection() {
  return (
    <div className="space-y-8">
      <SectionLabel label="FAQ" title="Frequently Asked Questions" />
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index.toString()}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
