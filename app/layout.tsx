import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: {
    default:
      "Lái Xe Thầy Tùng - Trung tâm đào tạo lái xe Trường An | Dạy Lái Xe Uy Tín Bao Đậu 100% - TP.HCM",
    template: "%s | Lái Xe Thầy Tùng",
  },
  description:
    "🏆 Thầy Tùng - Giáo viên dạy lái xe 5+ năm kinh nghiệm tại Trung tâm đào tạo lái xe Trường An. Học 1 kèm 1, cam kết BAO ĐẬU 100%, xe đời mới. Không phát sinh chi phí. Gọi ngay!",
  icons: {
    icon: "/logo-vector.png",
    shortcut: "/logo-vector.png",
    apple: "/logo-vector.png",
  },
  keywords: [
    "thầy tùng dạy lái xe",
    "lái xe thầy tùng",
    "học lái xe b2",
    "học lái xe b1",
    "dạy lái xe bao đậu",
    "học lái xe tphcm",
    "học lái xe 1 kèm 1",
    "học lái xe cam kết đậu",
    "học lái xe quận 12",
    "học lái xe thầy tùng",
    "lê tùng dạy lái xe",
    "đào tạo lái xe lê tùng",
    "lê tùng đào tạo lái xe",
    "Trung tâm trường an",
    "Trung tâm đào tạo lái xe Trường An",
    "Trường An B1",
    "Trường An lái xe B1",
    "Trường An lái xe B2",
  ],
  authors: [{ name: "Thầy Tùng - Dạy Lái Xe" }],
  creator: "Lái Xe Thầy Tùng",
  publisher: "Lái Xe Thầy Tùng",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://letungdaotaolaixe.com"),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Lái Xe Thầy Tùng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

// Structured Data for Local Business SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Lái Xe Thầy Tùng",
  alternateName: "Thầy Tùng Dạy Lái Xe",
  description:
    "Thầy Tùng - Giáo viên dạy lái xe uy tín với 5+ năm kinh nghiệm tại TP.HCM. Học 1 kèm 1, cam kết bao đậu 100%, xe đời mới.",
  url: "https://letungdaotaolaixe.com",
  telephone: "0964940495",
  email: "https://www.facebook.com/daotaolaixe.letung",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Quận 12",
    addressLocality: "Quận 12",
    addressRegion: "TP. Hồ Chí Minh",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.762622",
    longitude: "106.660172",
  },
  openingHours: "Mo-Su 06:00-21:00",
  priceRange: "16.000.000đ - 22.000.000đ",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1500",
    bestRating: "5",
  },
  image: "https://letungdaotaolaixe.com/banner-1.jpg",
  sameAs: ["https://www.facebook.com/daotaolaixe.letung"],
  founder: {
    "@type": "Person",
    name: "Thầy Tùng",
    jobTitle: "Giáo viên dạy lái xe",
  },
  slogan: "Học lái xe uy tín - Bao đậu 100%",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
