import { PageShell } from "@/components/site/page-shell";

const termsSections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to ParkTek.",
      "ParkTek provides smart parking technology solutions that help automate parking access, vehicle monitoring, and operational management. By using ParkTek services, you agree to these Terms of Service."
    ]
  },
  {
    title: "2. Nature of ParkTek Services",
    paragraphs: ["ParkTek is a technology platform only.", "ParkTek provides:"],
    lists: [
      {
        items: [
          "Automated entry and exit management",
          "Vehicle identification using ANPR / RFID",
          "Parking access control and monitoring",
          "Operational dashboards and analytics"
        ]
      }
    ],
    paragraphsAfter: ["ParkTek does not:"],
    listsAfter: [
      {
        items: ["Process payments", "Collect parking fees", "Manage parking facilities"]
      }
    ],
    closing:
      "All parking rules and enforcement are handled by the respective parking operators."
  },
  {
    title: "3. User Responsibilities",
    paragraphs: ["Users must:"],
    lists: [
      {
        items: [
          "Provide accurate vehicle information",
          "Use ParkTek only for authorized purposes",
          "Follow parking facility rules",
          "Protect their access credentials"
        ]
      }
    ]
  },
  {
    title: "4. Access & Availability",
    paragraphs: [
      "ParkTek does not guarantee uninterrupted service.",
      "Downtime may occur due to maintenance or external dependencies."
    ]
  },
  {
    title: "5. No Financial Transactions",
    paragraphs: ["ParkTek does not handle payments, refunds, billing, or any financial transactions."]
  },
  {
    title: "6. Limitation of Liability",
    paragraphs: ["ParkTek is not responsible for:"],
    lists: [
      {
        items: [
          "Vehicle damage, theft, or loss",
          "Parking availability or enforcement actions",
          "Disputes between users and parking operators"
        ]
      }
    ]
  },
  {
    title: "7. Third-Party Integrations",
    paragraphs: [
      "ParkTek may integrate with third-party hardware or software.",
      "ParkTek is not responsible for third-party system failures."
    ]
  },
  {
    title: "8. Account Suspension",
    paragraphs: ["ParkTek may suspend or terminate access for misuse or violations."]
  },
  {
    title: "9. Governing Law",
    paragraphs: ["These terms are governed by the laws of India."]
  },
  {
    title: "10. Contact",
    paragraphs: ["For support, contact:"],
    contact: "support@parktek.in"
  }
];

export const metadata = {
  title: "Terms of Service | ParkTek",
  description: "Terms governing the use of ParkTek services and platform access."
};

function renderList(list, index) {
  return (
    <ul key={index}>
      {list.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function TermsOfServicePage() {
  return (
    <PageShell
      eyebrow="Terms of Service"
      lead="These terms describe the scope of ParkTek services, user responsibilities, and the limits of the ParkTek platform."
      title="Terms for using ParkTek services."
    >
      <div className="policy-copy grid gap-8">
        {termsSections.map((section) => (
          <section className="grid gap-4" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.lists?.map(renderList)}
            {section.paragraphsAfter?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.listsAfter?.map(renderList)}
            {section.closing ? <p>{section.closing}</p> : null}
            {section.contact ? (
              <p>
                <a className="font-semibold text-parktek-ink underline" href={`mailto:${section.contact}`}>
                  {section.contact}
                </a>
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </PageShell>
  );
}
