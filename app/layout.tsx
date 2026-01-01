import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MATCHUP | Social Coordination Infrastructure",
  description: "The intelligent layer for group availability. Eliminate back-and-forth scheduling with high-fidelity visual heatmaps and cross-network synchronization.",
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
