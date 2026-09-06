import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const description =
  "Websites, software, and custom technology built around what you need.";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmivaleworks.com"),
  title: {
    default: "Emmivale Works",
    template: "%s | Emmivale Works",
  },
  description,
  applicationName: "Emmivale Works",
  authors: [{ name: "Emmivale Works" }],
  creator: "Emmivale Works",
  publisher: "Emmivale Works",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emmivale Works",
    description,
    url: "/",
    siteName: "Emmivale Works",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Emmivale Works",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only z-50 bg-foreground px-4 py-3 text-sm font-semibold text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
