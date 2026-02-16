import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* PPC Landing pages: no Nav, no Footer — pure conversion focus */}
      {children}
    </>
  );
}
