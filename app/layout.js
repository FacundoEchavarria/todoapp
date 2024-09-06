import { Inter } from "next/font/google";
import "./globals.css";

import TopBar from "@/components/shared/TopBar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "To Do App",
  description: "A page to get yours taks done.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
