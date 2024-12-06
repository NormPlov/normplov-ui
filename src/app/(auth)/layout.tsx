import type { Metadata } from "next";
import "../globals.css";
import { Inter, Suwannaphum } from "next/font/google";
import SessionWrapper from "../SessionProvider";
import StoreProvider from "../StoreProvider";

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

export default function  AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en">
    <SessionWrapper>
      <body className={`${suwannaphum} ${inter} antialiased`}>
        <StoreProvider>
        {/* Main content */}
        <main> {children}</main>
        </StoreProvider>
      </body>
    </SessionWrapper>
    </html>
  );
}
  