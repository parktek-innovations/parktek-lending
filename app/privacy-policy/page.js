import { PageShell } from "@/components/site/page-shell";

export const metadata = {
  title: "Privacy Policy | ParkTek",
  description: "Read how ParkTek handles information on the landing website."
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      lead="This page describes how the ParkTek landing website handles contact information and usage data."
      title="Privacy policy for the ParkTek website."
    >
      <div className="policy-copy grid gap-8">
        <section className="grid gap-4">
          <h2>Information we collect</h2>
          <p>
            We may collect the details you voluntarily share through the contact form, such as your
            name, email address, phone number, company name, and project context. Basic website
            analytics and device information may also be captured to help us maintain the site.
          </p>
        </section>

        <section className="grid gap-4">
          <h2>How we use it</h2>
          <p>
            We use submitted information to respond to inquiries, understand business requirements,
            improve the website, and coordinate future discussions around ParkTek solutions.
          </p>
        </section>

        <section className="grid gap-4">
          <h2>Sharing and retention</h2>
          <p>
            We do not sell personal information from this website. Data may be shared with internal
            team members or service providers only where needed to respond to an inquiry or run the
            site. Information is retained only as long as reasonably necessary for those purposes.
          </p>
        </section>

        <section className="grid gap-4">
          <h2>Your choices</h2>
          <p>
            You can request correction or deletion of information you previously shared with us by
            contacting the ParkTek team directly at `support@parktek.in`.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
