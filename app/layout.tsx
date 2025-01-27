import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API LIBRARY",
  description: "Provide one solution to visulize for your fav opensource and free apis",
  manifest: './manifest.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
