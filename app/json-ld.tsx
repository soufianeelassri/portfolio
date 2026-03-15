import { personalInfo } from "@/lib/data";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.tagline,
    email: personalInfo.email,
    url: "https://soufiane-nom.vercel.app",
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
      name: "LITIS Laboratory, INSA Rouen Normandie",
    },
    sameAs: [
      personalInfo.links.github,
      personalInfo.links.linkedin,
      personalInfo.links.googleScholar,
      personalInfo.links.twitter,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
