import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import SubscriptionFooter from "@/components/footer/SubscriptionFooter";
import AboutFooter from "@/components/footer/AboutFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Amalyfe",
  description: "Ztion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased w-screen h-screen`}>
        <Navbar />
        {children}
        <div className="mb-4" />
        <SubscriptionFooter />
        <AboutFooter />
      </body>
    </html>
  );
}
