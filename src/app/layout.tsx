import type { Metadata } from "next";
import "./globals.css";
import { Inter, Suwannaphum } from "next/font/google";
import NavbarPage from "../components/Navbar/NavbarPage";
import FooterPage from "../components/Footer/FooterPage";

const suwannaphum = Suwannaphum({
  subsets: ["khmer"],
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <body className={`${suwannaphum} ${inter} antialiased`}>
        {/* Navbar */}
        <NavbarPage /> 
        {/* Main content */}
        <main className="mx-auto ">{children}</main>
        {/* Footer */}
        <FooterPage/>
      </body>
    </html>
  );
}
