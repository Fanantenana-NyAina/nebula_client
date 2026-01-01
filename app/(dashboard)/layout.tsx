import type { Metadata } from "next";
import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/home/AppSideBar";

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
      <body cz-shortcut-listen="true">
        <div className="dark overflow-hidden">
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              <main className="flex-1 relative overflow-y-auto">
                <div className="absolute top-4 left-4 z-50">
                  <SidebarTrigger className="text-white" />
                </div>
                {children}
              </main>
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
