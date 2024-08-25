// src/app/layout.js (or wherever your layout file is located)

import { Inter } from "next/font/google";
import "../globals.css"; // Adjust path if necessary

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

// Server-side metadata export
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
