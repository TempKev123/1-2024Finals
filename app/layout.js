import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kev's Finals",
  description: "Kev's Finals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ResponsiveAppBar />
        {children}
        </body>
    </html>
  );
}
