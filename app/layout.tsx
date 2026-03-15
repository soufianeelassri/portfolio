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
  title: "Soufiane [NOM] — AI/ML Research Engineer",
  description:
    "Portfolio of Soufiane [NOM], AI/ML Research Engineer specializing in LLMs, RAG, Knowledge Graphs & Multi-Agent Systems. Currently at LITIS Laboratory, INSA Rouen Normandie.",
  keywords: [
    "AI Research",
    "Machine Learning",
    "LLM",
    "RAG",
    "Knowledge Graphs",
    "Multi-Agent Systems",
    "NLP",
  ],
  authors: [{ name: "Soufiane [NOM]" }],
  openGraph: {
    title: "Soufiane [NOM] — AI/ML Research Engineer",
    description:
      "Building intelligent systems with LLMs, Knowledge Graphs & Multi-Agent Architectures",
    url: "https://soufiane-nom.vercel.app",
    siteName: "Soufiane [NOM] Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soufiane [NOM] — AI/ML Research Engineer",
    description:
      "Building intelligent systems with LLMs, Knowledge Graphs & Multi-Agent Architectures",
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
    <html lang="en" suppressHydrationWarning>
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
