import { ContactForm } from "@/components/site/contact-form";
import { PageShell } from "@/components/site/page-shell";

export const metadata = {
  title: "Contact ParkTek",
  description: "Talk to ParkTek about smart parking, ANPR, access control, and site operations."
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      lead="Bring your parking, access control, or vehicle movement workflow into one coordinated operating layer."
      title="Talk to ParkTek about your premises."
    >
      <ContactForm />
    </PageShell>
  );
}
