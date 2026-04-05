import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Đỗ Bá Thượng – Front-End Developer | React & Next.js",
  description:
    "Portfolio của Đỗ Bá Thượng – Frontend Developer với hơn 2 năm kinh nghiệm phát triển React.js, Next.js. Chuyên về UI/UX, hiệu năng cao và kiến trúc frontend cho các hệ thống lớn.",
  keywords: ["Frontend Developer", "React.js", "Next.js", "TypeScript", "Đỗ Bá Thượng", "Portfolio"],
  authors: [{ name: "Đỗ Bá Thượng", url: "https://github.com/DoThuong1103" }],
  openGraph: {
    title: "Đỗ Bá Thượng – Front-End Developer",
    description: "Portfolio của Đỗ Bá Thượng – Frontend Developer chuyên React & Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="relative">
        <div className="bg-animated" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
