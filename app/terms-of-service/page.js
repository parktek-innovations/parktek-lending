import { PageShell } from "@/components/site/page-shell";

export const metadata = {
  title: "Terms of Service | ParkTek",
  description: "Terms governing use of the ParkTek landing website."
};

export default function TermsOfServicePage() {
  return (
    <PageShell
      eyebrow="Terms of Service"
      lead="These terms govern use of the ParkTek landing website and any information submitted through it."
      title="Terms for using the ParkTek website."
    >
      <div className="policy-copy grid gap-8">
        <section className="grid gap-4">
          <h2>Website use</h2>
          <p>
            This website is provided for informational and business inquiry purposes. You agree to
            use it lawfully and not interfere with the availability, security, or integrity of the
            site.
          </p>
        </section>

        <section className="grid gap-4">
          <h2>Content and intellectual property</h2>
          <p>
            Unless otherwise stated, the website design, branding, content, and visual assets are
            owned by ParkTek or used with permission. They may not be reproduced or redistributed
            without prior authorization.
          </p>
        </section>

        <section className="grid gap-4">
          <h2>No service commitment from the site alone</h2>
          <p>
            Submitting a message through the website does not create a contractual relationship,
            guaranteed response time, or service-level obligation. Commercial engagement begins only
            through separate written agreement.
          </p>
        </section>

        <section className="grid gap-4">
          <h2>Liability</h2>
          <p>
            The website is provided on an as-is basis. While ParkTek aims to keep the information
            accurate and current, we do not guarantee uninterrupted availability or completeness of
            all content on the site.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
