import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEBULA - Login Page",
  description: "A futuristic gallery of rare digital objects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
