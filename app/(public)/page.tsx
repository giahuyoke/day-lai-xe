import { Metadata } from "next";
import LandingPageServer from "@/components/public/landing-page-server";

export const metadata: Metadata = {
  title: "Lái Xe Thầy Tùng | Dạy Lái Xe Uy Tín Bao Đậu 100% - TP.HCM",
  description:
    "🏆 Thầy Tùng - Giáo viên dạy lái xe 15+ năm kinh nghiệm tại TP.HCM. Học 1 kèm 1, cam kết BAO ĐẬU 100%, xe đời mới 2024. Không phát sinh chi phí. Gọi ngay: 0909.123.456",
  keywords: [
    "thầy tùng dạy lái xe",
    "lái xe thầy tùng",
    "học lái xe thầy tùng",
    "dạy lái xe bao đậu",
    "học lái xe b1 b2",
    "học lái xe tphcm",
    "học lái xe bình tân",
    "học lái xe 1 kèm 1",
    "học phí lái xe",
    "dạy lái xe uy tín",
    "thầy dạy lái xe giỏi",
    "bằng lái xe ô tô",
    "học lái xe giá rẻ",
    "học lái xe cam kết đậu",
  ],
  openGraph: {
    title: "Lái Xe Thầy Tùng | Dạy Lái Xe Uy Tín Bao Đậu 100%",
    description:
      "🏆 Thầy Tùng - 15+ năm kinh nghiệm dạy lái xe. Học 1 kèm 1, cam kết BAO ĐẬU 100%, xe đời mới. Gọi ngay: 0909.123.456",
    images: ["/banner-1.jpg"],
    type: "website",
    locale: "vi_VN",
    siteName: "Lái Xe Thầy Tùng",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lái Xe Thầy Tùng | Dạy Lái Xe Bao Đậu 100% - TP.HCM",
    description:
      "Thầy Tùng - 15+ năm kinh nghiệm. Học 1 kèm 1, cam kết đậu 100%, xe đời mới.",
    images: ["/banner-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://laixethaytung.vn",
  },
};

export default function Home() {
  return <LandingPageServer />;
}
