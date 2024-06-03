import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/ui/Header/Header";
import { Footer } from "./components/ui/Footer/Footer";
import "./styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conference Schedule",
  description: "Evento de Conferência by Blue Umbrella Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      {/* <body className={inter.className}>{children}</body> */}
      <body className="w-full mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
