import type { Metadata } from "next";
import { dio_font_normale } from "@/lib/fonts/font";
import { NavBar } from "@/app/components/NavBar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dio_font_normale.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
