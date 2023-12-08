import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import commerce from "@/lib/commerce";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eternal Pehnawa",
  description:
    "Eternal Pehnawa is e-commerce website for purchasing sarees, dress-material and home decor products.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await commerce.categories.list();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar categories={categories} />
        {children}
      </body>
    </html>
  );
}
