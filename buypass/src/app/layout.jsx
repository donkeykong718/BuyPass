import "./globals.css";
import Logo from "./components/Logo";
import Header from "./components/Header";
import React from "react";

export const metadata = {
  title: "BuyPass",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-0 m-0 border-box scroll-smooth">
      <body>
        <div className="fixed top-0 z-50 bg-white max-h-[32vh]">
          <Logo />
          <Header />
        </div>
        {/* <div className="sticky flex top-0 min-h-[40vh]"></div> */}
        {children}
      </body>
    </html>
  );
}
