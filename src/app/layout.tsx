import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/shareable-components/Header"

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="mx-4 sm:mx-8 my-5">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
