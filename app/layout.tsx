import type { Metadata, Viewport } from "next";
import { DM_Sans, Libre_Baskerville, Nunito_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

// The three families used in the Figma frames: Nunito Sans for headings and nav,
// Plus Jakarta Sans for card text and buttons, Libre Baskerville for the Home headline and
// "Caption M" eyebrows (Figma 103:2944).
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

// DM Sans: labels on the finding cards (Figma 223:2793, "DM Sans SemiBold" 16/24).
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lumbini Sharma, product designer",
    template: "%s · Lumbini Sharma",
  },
  description:
    "Lumbini Sharma is a product designer in the San Francisco Bay Area who designs the structure behind complex software.",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${plusJakartaSans.variable} ${dmSans.variable} ${libreBaskerville.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-10 focus:rounded-control focus:bg-surface focus:px-4 focus:py-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
