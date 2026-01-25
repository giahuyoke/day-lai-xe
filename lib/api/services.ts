/**
 * API Service Layer
 * Mock data service - sẽ được thay thế bằng API thực tế sau
 * Các function này có thể được gọi từ Server Components để render SSR
 */

// Types
export interface ContactInfo {
  phoneRaw: string;
  phoneDisplay: string;
  zaloPhone: string;
  address: string;
  trainingAddress: string;
  email: string;
  workingHours: string;
  facebookUrl: string;
  ctaTitle?: string;
  ctaDescription?: string;
}

export interface HeroContent {
  tagline: string;
  titleMain: string;
  titleHighlight1: string;
  titleHighlight2: string;
  description: string;
  bannerImages: string[];
}

export interface Stats {
  students: number;
  passRatePercent: number;
  yearsExperience: number;
  vehicles: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discountVND: number;
  discountPercent?: number;
  validUntil: string;
  isActive: boolean;
  code?: string;
}

export interface PricingPackage {
  code: string;
  title: string;
  tagline: string;
  priceVND: number;
  originalPriceVND?: number;
  highlight: boolean;
  badge?: string;
  buttonText: string;
  features: string[];
  image: string;
}

export interface TrialOffer {
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  content: string;
  licenseType: string;
  date: string;
}

export interface SiteData {
  teacherName: string;
  centerName: string;
  brandSlogan: string;
  hero: HeroContent;
  stats: Stats;
  contact: ContactInfo;
  trialOffer: TrialOffer;
  promotions: Promotion[];
  pricing: {
    groupDiscountVND: number;
    packages: PricingPackage[];
  };
  processSteps: ProcessStep[];
  testimonials: Testimonial[];
  licenseOptions: string[];
  galleries: {
    vehicles: string[];
    office: string[];
    training: string[];
  };
}

// Mock delay to simulate API call (uncomment when needed)
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Lấy toàn bộ dữ liệu site
 * Trong tương lai sẽ fetch từ API/CMS
 */
export async function getSiteData(): Promise<SiteData> {
  // Simulate API delay (remove in production)
  // await delay(100);

  return {
    teacherName: "Thầy Tùng",
    centerName: "Lái Xe Thầy Tùng",
    brandSlogan: "Học lái xe uy tín - Bao đậu 100%",
    hero: {
      tagline: "🏆 Top 1 Giáo Viên Dạy Lái Xe Uy Tín Tại TP.HCM",
      titleMain: "Dạy Lái Xe",
      titleHighlight1: "Thầy Tùng",
      titleHighlight2: "Bao Đậu 100%",
      description:
        "Hơn 5 năm kinh nghiệm đào tạo. Cam kết KHÔNG phát sinh chi phí. Học 1 kèm 1 trên xe đời mới. Thời gian linh hoạt - Học tới khi nào đậu thì thôi!",
      bannerImages: ["/banner-1.jpg", "/banner-2.jpg", "/banner-3.jpg"],
    },
    stats: {
      students: 100,
      passRatePercent: 90,
      yearsExperience: 5,
      vehicles: 10,
    },
    contact: {
      phoneRaw: "0909123456",
      phoneDisplay: "0909.123.456",
      zaloPhone: "0909123456",
      address: "151 Trương Thị Hoa, Quận 12, TP.HCM",
      trainingAddress: "Sân tập lái KDC Tên Lửa, Bình Tân",
      email: "thaytunglaixin@gmail.com",
      workingHours: "6:00 - 21:00 (Cả T7, CN & Lễ)",
      facebookUrl: "https://facebook.com/laixethaytung",
      ctaTitle: "Gọi Ngay Thầy Tùng",
      ctaDescription: "Tư vấn miễn phí 24/7",
    },
    trialOffer: {
      title: "Đăng Ký Học Thử MIỄN PHÍ",
      description:
        "Trải nghiệm 1 giờ học thực tế trên xe Xpander (số sàn) hoặc Honda Civic (số tự động) đời mới",
      image: "/anh-3-xe.jpg",
    },
    promotions: [
      {
        id: "promo-tet-2026",
        title: "Ưu Đãi Đầu Năm 2026",
        description: "Giảm ngay 1 triệu khi đăng ký trong tháng 1",
        discountVND: 1000000,
        validUntil: "2026-01-31",
        isActive: true,
        code: "TET2026",
      },
      {
        id: "promo-group",
        title: "Ưu Đãi Nhóm",
        description: "Đăng ký nhóm 2 người trở lên giảm ngay 500K/người",
        discountVND: 500000,
        validUntil: "2026-12-31",
        isActive: true,
      },
    ],
    pricing: {
      groupDiscountVND: 500000,
      packages: [
        {
          code: "B1",
          title: "Hạng B số tự động",
          tagline: "Số tự động - Dễ học nhất",
          priceVND: 18000000,
          originalPriceVND: 19000000,
          highlight: false,
          buttonText: "Đăng Ký B1",
          features: [
            "Xe Honda City đời mới 2023",
            "Chạy DAT 710km (bắt buộc)",
            "Học sa hình thô & cảm ứng",
            "Bao trọn gói lệ phí thi",
            "Hỗ trợ thi lại miễn phí",
          ],
          image: "/anh-xe-so-tu-dong.jpg",
        },
        {
          code: "B2",
          title: "Hạng B số sàn",
          tagline: "Số sàn - Chuyên nghiệp",
          priceVND: 16000000,
          originalPriceVND: 17500000,
          highlight: true,
          badge: "PHỔ BIẾN",
          buttonText: "Đăng Ký B2 Ngay",
          features: [
            "Xe Xpander số sàn đời mới",
            "Chạy DAT 810km (bắt buộc)",
            "Bằng lái xe kinh doanh Grab/Taxi",
            "Hỗ trợ trả góp 0%",
            "Cam kết đậu 100%",
          ],
          image: "/anh-xe-so-san.jpg",
        },
        {
          code: "C",
          title: "Hạng C",
          tagline: "Xe tải - Lương cao",
          priceVND: 22000000,
          highlight: false,
          buttonText: "Đăng Ký Hạng C",
          features: [
            "Học lái xe tải Hynhdai/Isuzu",
            "Thời gian học 6 tháng",
            "Bằng lái xe tải trên 3.5 tấn",
            "Cam kết vững tay nghề",
            "Hỗ trợ giới thiệu việc làm",
          ],
          image: "/anh-xe-tai.jpg",
        },
      ],
    },
    processSteps: [
      {
        step: "01",
        title: "Nộp Hồ Sơ",
        desc: "Chỉ cần CMND/CCCD + Ảnh thẻ. Thầy hỗ trợ làm hồ sơ tại nhà.",
      },
      {
        step: "02",
        title: "Học Lý Thuyết",
        desc: "Học luật giao thông, biển báo. Hỗ trợ mẹo thi bao đậu.",
      },
      {
        step: "03",
        title: "Học Thực Hành",
        desc: "Sa hình & Đường trường (DAT). Cầm tay chỉ việc 1 kèm 1.",
      },
      {
        step: "04",
        title: "Thi & Nhận Bằng",
        desc: "Thi tốt nghiệp & Sát hạch. Nhận bằng sau 15-20 ngày.",
      },
    ],
    testimonials: [
      {
        id: "1",
        name: "Nguyễn Văn Minh",
        rating: 5,
        content:
          "Thầy Tùng dạy rất tận tâm, không quát mắng. Mình đậu ngay lần đầu. Cảm ơn thầy nhiều!",
        licenseType: "B2",
        date: "2025-12-15",
      },
      {
        id: "2",
        name: "Trần Thị Hương",
        rating: 5,
        content:
          "Xe đời mới, sạch sẽ, máy lạnh mát. Thời gian học linh hoạt phù hợp với lịch làm việc của mình.",
        licenseType: "B1",
        date: "2025-11-20",
      },
      {
        id: "3",
        name: "Lê Hoàng Nam",
        rating: 5,
        content:
          "Đăng ký học cùng bạn được giảm giá. Quy trình chuyên nghiệp, hỗ trợ nhiệt tình từ A-Z.",
        licenseType: "B2",
        date: "2025-10-05",
      },
      {
        id: "4",
        name: "Phạm Thị Mai",
        rating: 5,
        content:
          "Lúc đầu mình rất sợ lái xe, nhưng Thầy Tùng kiên nhẫn chỉ từng bước. Giờ mình đã tự tin chạy xe đi làm hàng ngày!",
        licenseType: "B1",
        date: "2025-09-18",
      },
      {
        id: "5",
        name: "Võ Quốc Hùng",
        rating: 5,
        content:
          "Học với Thầy không bị cắt giờ, dạy đến khi nào vững mới cho thi. Đậu 100% sa hình và đường trường!",
        licenseType: "B2",
        date: "2025-08-25",
      },
      {
        id: "6",
        name: "Đỗ Thanh Tâm",
        rating: 5,
        content:
          "Giá cả minh bạch, không phát sinh chi phí như quảng cáo. Thầy còn hỗ trợ làm hồ sơ tận nhà rất tiện.",
        licenseType: "C",
        date: "2025-07-10",
      },
    ],
    licenseOptions: [
      "B1 - Số tự động (Phổ biến)",
      "B2 - Số sàn (Chuyên nghiệp)",
      "C - Xe tải",
      "Bổ túc tay lái",
    ],
    galleries: {
      vehicles: [
        "/anh-xe-so-san.jpg",
        "/anh-xe-so-tu-dong.jpg",
        "/anh-xe-tai.jpg",
        "/anh-3-xe.jpg",
      ],
      office: ["/anh-van-phong.jpg"],
      training: ["/banner-1.jpg", "/banner-2.jpg", "/banner-3.jpg"],
    },
  };
}

/**
 * Lấy thông tin liên hệ
 */
export async function getContactInfo(): Promise<ContactInfo> {
  const data = await getSiteData();
  return data.contact;
}

/**
 * Lấy danh sách khuyến mãi đang active
 */
export async function getActivePromotions(): Promise<Promotion[]> {
  const data = await getSiteData();
  const now = new Date();
  return data.promotions.filter(
    (p) => p.isActive && new Date(p.validUntil) >= now,
  );
}

/**
 * Lấy bảng giá
 */
export async function getPricingPackages(): Promise<PricingPackage[]> {
  const data = await getSiteData();
  return data.pricing.packages;
}

/**
 * Lấy thống kê
 */
export async function getStats(): Promise<Stats> {
  const data = await getSiteData();
  return data.stats;
}

/**
 * Format tiền VND
 */
export function formatCurrencyVND(value: number): string {
  return value.toLocaleString("vi-VN") + "đ";
}

/**
 * Format giảm giá
 */
export function formatDiscountVND(value: number): string {
  return value.toLocaleString("vi-VN") + "đ";
}
