import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { JsonLd } from "./json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soufiane Elassri — Ingénieur IA",
  description:
    "Portfolio de Soufiane Elassri, Ingénieur en Intelligence Artificielle spécialisé en Machine Learning, Deep Learning, NLP et Data Science.",
  keywords: [
    "Intelligence Artificielle",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "NLP",
    "LLM",
    "RAG",
    "Ingénieur IA",
  ],
  authors: [{ name: "Soufiane Elassri" }],
  openGraph: {
    title: "Soufiane Elassri — Ingénieur IA",
    description:
      "Conception de systèmes intelligents avec le Machine Learning, le Deep Learning et la Data Science",
    siteName: "Soufiane Elassri Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soufiane Elassri — Ingénieur IA",
    description:
      "Conception de systèmes intelligents avec le Machine Learning, le Deep Learning et la Data Science",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
