import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reen's Portfolio",
  description: "You'll find out more about me here.",
};

export default function RootLayout({ children }) {
  const language = "en";
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
        {children}
      </body>
    </html>
  );
}
