import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
