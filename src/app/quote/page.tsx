import { Breadcrumb, Section } from "@/components/ui";
import QuoteForm from "./QuoteForm";

export const metadata = {
  title: "Get a Free Quote | DECA Windows & Doors",
  description: "Get a free, no-obligation quote for premium European-style windows and doors. Custom sizes and configurations available.",
};

export default function QuotePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Get a Free Quote" }]} />
      <Section>
        <QuoteForm />
      </Section>
    </>
  );
}
