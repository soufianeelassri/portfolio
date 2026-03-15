"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Publications } from "@/components/sections/Publications";

export default function PublicationsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Publications />
      </main>
      <Footer />
    </>
  );
}
