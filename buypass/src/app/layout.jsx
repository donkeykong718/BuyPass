import "./globals.css";
import Logo from "./components/Logo";
import Header from "./components/Header";

export const metadata = {
  title: "BuyPass",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-0 m-0 border-box scroll-smooth">
      <body className="h-[100vh]">{children}</body>
    </html>
  );
}
