import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blog Genzet",
  description: "Home Test Frontend Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} font-sans antialiased flex flex-col min-h-screen justify-between`}
      >
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
