import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Thầy Tùng - Trung tâm Trường An - Dạy Lái Xe Uy Tín TP.HCM",
  description:
    "Trung tâm đào tạo lái xe B1, B2, C uy tín, tỷ lệ đậu 99%. Học 1 kèm 1 xe đời mới.",
  keywords: ["dạy lái xe", "học lái xe b2", "thầy Tùng auto", "bổ túc tay lái"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
