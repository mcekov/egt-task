import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "EGT Task",
  description: "EGT Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
