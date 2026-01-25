// Centralized dynamic content & business data for the landing page.
// Later this can be replaced by data fetched from a database / CMS / admin site.

export const SITE_CONTENT = {
  teacherName: "Thầy Tùng",
  hero: {
    tagline: "Top đầu giáo viên dạy lái xe tại TP.HCM",
    titleMain: "Học Lái Xe Ô Tô",
    titleHighlight1: "Vững Tay Lái",
    titleHighlight2: "Bao Đậu",
    description:
      "Cam kết không phát sinh chi phí. Học 1 kèm 1 trên xe đời mới. Thời gian linh hoạt theo lịch rảnh của học viên.",
  },
  stats: {
    students: 1000, // số học viên
    passRatePercent: 90, // tỷ lệ đậu
  },
  trialOffer: {
    title: "Đăng Ký Học Thử 1 Giờ",
    description:
      "Hoàn toàn miễn phí, trải nghiệm xe Xpander (số sàn) đời mới hoặc Honda Civic (số tự động)",
  },
  form: {
    licenseOptions: [
      "B1 - Số tự động (Phổ biến)",
      "B2 - Số sàn (Chuyên nghiệp)",
      "C - Xe tải",
      "Bổ túc tay lái",
    ],
  },
  pricing: {
    groupDiscountVND: 500000,
    packages: [
      {
        code: "B1",
        title: "Hạng B số tự động",
        tagline: "Số tự động - Dễ học nhất",
        priceVND: 18000000,
        highlight: false,
        buttonText: "Đăng Ký B1",
        features: [
          "Xe Honda Civic",
          "Chạy DAT 710km (bắt buộc)",
          "Học sa hình thô & cảm ứng",
          "Bao trọn gói lệ phí thi",
        ],
      },
      {
        code: "B2",
        title: "Hạng B số sàn",
        tagline: "Số sàn - Chuyên nghiệp",
        priceVND: 16000000,
        highlight: true,
        badge: "HOT",
        buttonText: "Đăng Ký B2 Ngay",
        features: [
          "Xe Xpander số sàn đời mới",
          "Chạy DAT 810km (bắt buộc)",
          "Bằng lái xe kinh doanh Grab/Taxi (tuỳ chọn thêm)",
          "Hỗ trợ trả góp 0%",
        ],
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
        ],
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
  contact: {
    phoneRaw: "0909123456",
    phoneDisplay: "0909.123.456", // định dạng hiển thị
    zaloPhone: "0909123456",
    ctaTitle: "Bạn Đã Sẵn Sàng Cầm Lái?",
    ctaDescription:
      "Đừng để việc chưa có bằng lái cản trở công việc và cuộc sống của bạn. Đăng ký ngay hôm nay để nhận ưu đãi giảm học phí!",
  },
};

export function formatCurrencyVND(value: number) {
  return value.toLocaleString("vi-VN") + "đ";
}

export function formatDiscountVND(value: number) {
  return value.toLocaleString("vi-VN") + "đ";
}
