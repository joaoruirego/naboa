import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NABOA",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0, padding: 0, border: 0 }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
