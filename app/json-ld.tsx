import { personalInfo } from "@/lib/data";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.tagline,
    email: personalInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rouen",
      addressCountry: "FR",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "ENSIASD",
    },
    worksFor: {
      "@type": "Organization",
      name: "Laboratoire LITIS, INSA Rouen Normandie",
    },
    sameAs: [
      personalInfo.links.github,
      personalInfo.links.linkedin,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
