import "./globals.css";
import { Inter } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reen Martini - Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
