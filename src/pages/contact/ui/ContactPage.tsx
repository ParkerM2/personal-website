import {
  Button,
  Container,
  Field,
  Form,
  Input,
  SectionLabel,
  Separator,
  Textarea,
} from "@/shared/ui"
import { FAQSection } from "@/widgets/faq-section"
import { useContactPage } from "../model/useContactPage"

export function ContactPage() {
  const { email } = useContactPage()

  return (
    <Container size="md" className="py-16">
      <SectionLabel label="CONTACT" title="Get In Touch" />
      <p className="mt-4 text-fg-secondary">
        Have a project in mind or just want to say hi? Reach out at{" "}
        <a
          href={`mailto:${email}`}
          className="text-accent underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          {email}
        </a>{" "}
        or fill out the form below.
      </p>
      <div className="mt-8">
        <Form>
          <Field label="Name" htmlFor="contact-name">
            <Input id="contact-name" placeholder="Your name" />
          </Field>
          <Field label="Email" htmlFor="contact-email">
            <Input id="contact-email" type="email" placeholder="your@email.com" />
          </Field>
          <Field label="Subject" htmlFor="contact-subject">
            <Input id="contact-subject" placeholder="What's this about?" />
          </Field>
          <Field label="Message" htmlFor="contact-message">
            <Textarea
              id="contact-message"
              placeholder="Tell me more..."
              className="min-h-[160px]"
            />
          </Field>
          <Button variant="primary" size="lg" className="w-full">
            Send Message
          </Button>
        </Form>
      </div>
      <Separator className="my-12" />
      <FAQSection />
    </Container>
  )
}
