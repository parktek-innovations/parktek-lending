import { PageShell } from "@/components/site/page-shell";

const privacySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'ParkTek ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect information when you use the ParkTek application or services.'
    ]
  },
  {
    title: "2. Information We Collect",
    paragraphs: ["We may collect the following types of information:"],
    lists: [
      {
        label: "Personal Information",
        items: ["Name", "Phone number", "Email address", "Vehicle registration details"]
      },
      {
        label: "Usage Information",
        items: ["App usage activity", "Login timestamps", "Feature interactions"]
      },
      {
        label: "Device Information",
        items: ["Device type", "Operating system", "App version", "IP address"]
      },
      {
        label: "Location Information",
        items: [
          "Location data may be collected if enabled by the user to support parking access and monitoring features."
        ]
      }
    ],
    paragraphsAfter: ["ParkTek does not collect or store any payment or financial information."]
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: ["We use the collected information to:"],
    lists: [
      {
        items: [
          "Provide and operate ParkTek services",
          "Enable parking access and vehicle monitoring",
          "Improve system performance and user experience",
          "Maintain security and prevent misuse",
          "Communicate service updates and notifications",
          "Comply with legal and regulatory obligations"
        ]
      }
    ]
  },
  {
    title: "4. Data Sharing",
    paragraphs: ["We do not sell or rent personal data. Information may be shared only with:"],
    lists: [
      {
        items: [
          "Parking operators for access and operational purposes",
          "Trusted service providers for hosting, analytics, or system maintenance",
          "Legal or regulatory authorities when required by law"
        ]
      }
    ]
  },
  {
    title: "5. Data Security",
    paragraphs: [
      "We use reasonable technical and organizational measures to protect your data. However, no system can guarantee complete security."
    ]
  },
  {
    title: "6. Data Retention",
    paragraphs: [
      "Personal data is retained only for as long as necessary to provide services or meet legal requirements. Data is securely deleted or anonymized when no longer needed."
    ]
  },
  {
    title: "7. Your Rights",
    paragraphs: ["You may request to:"],
    lists: [
      {
        items: [
          "Access your personal data",
          "Correct inaccurate data",
          "Request deletion of your data (subject to legal obligations)"
        ]
      }
    ],
    paragraphsAfter: ["Requests can be made by contacting ParkTek support."]
  },
  {
    title: "8. Cookies & Tracking",
    paragraphs: [
      "ParkTek may use cookies or similar technologies on its website to improve functionality and analytics. Cookie preferences can be managed through browser settings."
    ]
  },
  {
    title: "9. Children's Privacy",
    paragraphs: ["ParkTek does not knowingly collect data from children under 13 years of age."]
  },
  {
    title: "10. Policy Updates",
    paragraphs: [
      "This Privacy Policy may be updated periodically. Continued use of ParkTek after updates indicates acceptance of the revised policy."
    ]
  },
  {
    title: "11. Contact Information",
    paragraphs: ["For privacy-related questions or requests, contact:"],
    contact: "support@parktek.in"
  }
];

const deletionInstructions = [
  {
    step: "Step 1",
    title: "Go to your user profile",
    body: "Open the ParkTek app and tap the profile icon from the home screen."
  },
  {
    step: "Step 2",
    title: "Tap Delete Account",
    body: "On the profile screen, tap the Delete Account button."
  },
  {
    step: "Step 3",
    title: "Confirm the pop-up",
    body: 'A confirmation pop-up will appear. Tap "Delete" to proceed.'
  },
  {
    step: "Step 4",
    title: "Your account is deleted",
    body: "Once you confirm, your ParkTek account is completely deleted."
  }
];

const deletionScreenshots = [
  {
    title: "Open your profile",
    body: "Tap the profile icon from the ParkTek home screen to open your user profile.",
    image: "/account-deletion/profile-entry.png",
    alt: "ParkTek home screen showing the profile entry point."
  },
  {
    title: "Delete and confirm",
    body:
      'Tap "Delete Account" on the profile screen, then confirm the deletion in the pop-up. Personal information in this screenshot has been redacted.',
    image: "/account-deletion/delete-confirmation.png",
    alt: "Delete Account confirmation dialog in the ParkTek app with personal information redacted."
  },
  {
    title: "Account deleted",
    body: "A success message appears after the account deletion is completed.",
    image: "/account-deletion/account-deleted.png",
    alt: "ParkTek app showing the account deleted successfully confirmation."
  }
];

export const metadata = {
  title: "Privacy Policy | ParkTek",
  description: "Read how ParkTek collects, uses, stores, and protects personal information."
};

function renderList(list, index) {
  return (
    <div className="grid gap-3" key={index}>
      {list.label ? <p className="font-semibold text-parktek-ink">{list.label}:</p> : null}
      <ul>
        {list.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      lead="This policy explains how ParkTek collects, uses, stores, and protects information across its application and related services."
      title="Privacy policy for ParkTek services."
    >
      <div className="policy-copy grid gap-8">
        {privacySections.map((section) => (
          <section className="grid gap-4" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.lists?.map(renderList)}
            {section.paragraphsAfter?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.contact ? (
              <p>
                <a className="font-semibold text-parktek-ink underline" href={`mailto:${section.contact}`}>
                  {section.contact}
                </a>
              </p>
            ) : null}
          </section>
        ))}

        <section className="grid gap-6" id="account-deletion">
          <h2>
            <a
              className="underline decoration-[0.08em] underline-offset-4 transition-opacity hover:opacity-75"
              href="#account-deletion"
            >
              12. How to Delete Your Account
            </a>
          </h2>
          <p>
            You can permanently delete your ParkTek account directly from the app by following the
            steps below. Once confirmed, this action cannot be undone.
          </p>

          <div className="grid gap-4 not-prose">
            {deletionInstructions.map((item) => (
              <article
                className="rounded-[26px] border border-[#ece8d8] bg-[#fffdf5] px-5 py-5 md:px-6"
                key={item.step}
              >
                <p className="font-clash text-sm uppercase tracking-[0.16em] text-parktek-yellow">
                  {item.step}
                </p>
                <h3 className="mt-3 font-clash text-[28px] leading-[1.05] text-parktek-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg leading-8 text-[#4b4b4b]">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-3 not-prose">
            {deletionScreenshots.map((item) => (
              <article
                className="overflow-hidden rounded-[32px] border border-[#ece8d8] bg-white shadow-card"
                key={item.title}
              >
                <div className="border-b border-[#f1eddc] px-6 py-6 md:px-8">
                  <h3 className="mt-3 font-clash text-[30px] leading-[1.05] text-parktek-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-[#4b4b4b]">{item.body}</p>
                </div>

                <div className="bg-[#fbfaf4] p-4 md:p-6">
                  <div className="mx-auto max-w-[360px] overflow-hidden rounded-[28px] border border-[#ece8d8] bg-white shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
                    <img alt={item.alt} className="h-auto w-full" src={item.image} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p>
            If you are unable to access the app and still need help with account deletion, contact{" "}
            <a className="font-semibold text-parktek-ink underline" href="mailto:support@parktek.in">
              support@parktek.in
            </a>
            .
          </p>
        </section>
      </div>
    </PageShell>
  );
}
