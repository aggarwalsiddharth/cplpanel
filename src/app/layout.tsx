import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Sidebar from "~/components/ui/Sidebar";

export const metadata = {
  title: "CPL PANEL",
  description: "CPL PANEL DASHBOARD",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex items-start justify-between">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
