import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import Providers from "../providers";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Customer Management Portal",
  description: "A system to manage customers and tasks relating to them",
};

export default function RootLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex">
        <NextIntlClientProvider>
          <SideBar />
          <section className="sm:w-full w-50 sm:px-10 p-2 py-12 bg-[#f8fafc] dark:bg-[#0A172A] text-black dark:text-white">
            <Providers>{children}</Providers>
          </section>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
