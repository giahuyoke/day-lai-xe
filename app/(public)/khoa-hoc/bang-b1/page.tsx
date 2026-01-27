import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowLeft,
  Clock,
  Users,
  Award,
  BookOpen,
  Car,
  Shield,
  Phone,
  Star,
  Gauge,
} from "lucide-react";
import RegistrationForm from "@/components/public/registration-form";
import { getSiteData, formatCurrencyVND } from "@/lib/api/services";

// Force dynamic rendering để fetch data từ Redis
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title:
    "Học Lái Xe Ô Tô B Số Tự Động - Bằng B Số Tự Động Bao Đậu 100% | Thầy Tùng",
  description:
    "Học lái xe ô tô B1 số tự động tại TP.HCM. Xe Honda City đời mới 2023, học 1 kèm 1 với Thầy Tùng. Học phí 21.800.000đ trọn gói, cam kết đậu 100%. Đăng ký ngay!",
  keywords: [
    "học lái xe b1",
    "bằng lái xe b1",
    "học lái xe số tự động",
    "bằng b1 tphcm",
    "học lái xe ô tô",
    "dạy lái xe b1 bao đậu",
  ],
  openGraph: {
    title: "Học Lái Xe B1 Số Tự Động - Bao Đậu 100% | Thầy Tùng",
    description: "Xe Honda City 2023, học 1 kèm 1. Cam kết đậu 100%!",
    images: ["/anh-xe-so-tu-dong.jpg"],
  },
};

export default async function CourseB1Page() {
  const data = await getSiteData();
  const course = data.pricing.packages.find((p) => p.code === "B1");
  const { contact } = data;

  if (!course) {
    return <div>Không tìm thấy khóa học</div>;
  }

  const benefits = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Xe mạnh, An Toàn",
      desc: "Học trên xe Honda Civic số tự động",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Học 1 Kèm 1",
      desc: "Thầy Tùng trực tiếp dạy, không ghép học viên, cam kết chất lượng",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cam Kết Đậu 100%",
      desc: "Học đến khi đậu - không giới hạn số buổi học thực hành",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Số Tự Động Dễ Học",
      desc: "Không lo vấn đề côn - số, phù hợp người mới bắt đầu",
    },
  ];

  const curriculum = [
    {
      title: "Phần 1: Lý Thuyết (Học Online)",
      items: [
        "Luật giao thông đường bộ",
        "Biển báo, vạch kẻ đường",
        "Kỹ thuật lái xe an toàn",
        "450 câu hỏi thi lý thuyết + đáp án",
      ],
    },
    {
      title: "Phần 2: Thực Hành Sa Hình",
      items: [
        "Khởi động xe, các thao tác cơ bản",
        "Tiến - Lùi chuồng (dọc & ngang)",
        "Dừng xe nhường đường cho người đi bộ",
        "Đường vuông góc, tốc độ, đường cong",
      ],
    },
    {
      title: "Phần 3: Đường Trường (DAT)",
      items: [
        "Chạy DAT 710km theo quy định",
        "Kỹ năng lái xe ngoài đường thực tế",
        "Xử lý tình huống giao thông",
        "Đi đường cao tốc, quốc lộ",
      ],
    },
    {
      title: "Phần 4: Ôn Thi & Sát Hạch",
      items: [
        "Ôn luyện sa hình chuẩn sát hạch",
        "Thi thử nhiều lần trước khi thi thật",
        "Hướng dẫn tâm lý, kỹ năng phòng thi",
        "Thi sát hạch và nhận bằng",
      ],
    },
  ];

  const faqs = [
    {
      q: "Bằng B Số tự động và B Số Sàn khác nhau như thế nào?",
      a: "Bằng B Số tự động chỉ cho phép lái xe số tự động dưới 9 chỗ. Bằng B Số Sàn cho phép lái cả xe số sàn và số tự động, và có thể dùng để kinh doanh (Grab, Taxi).",
    },
    {
      q: "Học bằng B Số tự động mất bao lâu?",
      a: "Thời gian đào tạo từ 2-3 tháng. Bạn cần hoàn thành tối thiểu 710km đường trường (DAT) theo quy định.",
    },
    {
      q: "Chưa biết lái xe có học được không?",
      a: "Hoàn toàn được! Với xe số tự động, bạn chỉ cần tập trung vào ga, phanh và vô lăng. Thầy sẽ dạy từ cơ bản nhất.",
    },
    {
      q: "Thời gian học như thế nào?",
      a: "Bạn có thể chọn học sáng/chiều/tối hoặc cuối tuần tùy theo lịch của bạn. Rất linh hoạt!",
    },
    {
      q: "Có hỗ trợ trả góp không?",
      a: "Có! Chúng tôi hỗ trợ trả góp 0% lãi suất, chia thành nhiều đợt thanh toán để giảm áp lực tài chính.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Nộp Hồ Sơ",
      desc: "CMND/CCCD + Ảnh 3x4 + Giấy khám sức khỏe",
    },
    { step: "2", title: "Học Lý Thuyết", desc: "Online + Mẹo thi bao đậu" },
    { step: "3", title: "Học Sa Hình", desc: "Tại sân tập KDC Tên Lửa" },
    { step: "4", title: "Chạy DAT", desc: "710km đường trường" },
    {
      step: "5",
      title: "Thi & Nhận Bằng",
      desc: "sau 3-5 ngày cập nhật",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
          >
            <ArrowLeft size={18} />
            Quay lại trang chủ
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-green-300" />
                Dễ học nhất cho người mới
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Khóa Học Lái Xe{" "}
                <span className="text-yellow-400">Hạng B Số Tự Động</span>
                <br />
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Sở hữu bằng lái ô tô B Số tự động với học phí{" "}
                <span className="text-yellow-400 font-bold">
                  {formatCurrencyVND(course.priceVND)}
                </span>
                . Học trên xe Honda Civic, cam kết đậu 100% - Học đến khi đậu
                thì thôi!
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>2-3 tháng</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-yellow-400" />
                  <span>710km DAT</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Bao đậu 100%</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#register"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center"
                >
                  Đăng Ký Ngay
                </a>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={course.image}
                  alt="Học lái xe B Số tự động"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">
                  {formatCurrencyVND(course.priceVND)}
                </div>
                <div className="text-sm font-medium">Trọn gói - Trả góp 0%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại Sao Nên Học Bằng B Số tự động Tại{" "}
            <span className="text-yellow-500">Thầy Tùng</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nội Dung Khóa Học B Số tự động Chi Tiết
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {curriculum.map((section, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Chi Tiết Học Phí B Số tự động
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-green-700 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  {formatCurrencyVND(course.priceVND)}
                </div>
                <div className="text-green-200">Trọn gói - Không phát sinh</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Học phí đã bao gồm:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-medium">
                      ✓ Trả góp 0% lãi suất
                    </div>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
                      ✓ Hỗ trợ thi lại miễn phí
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                      ✓ Học không giới hạn buổi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Câu Hỏi Thường Gặp Về Bằng B Số tự động
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-16 bg-green-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Đăng Ký Học Bằng B Số tự động Ngay Hôm Nay!
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Xe số tự động - Lựa chọn hoàn hảo cho người mới bắt đầu. Không
                lo vấn đề côn số, chỉ tập trung vào kỹ năng lái xe!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Học trên xe Honda Civic</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>
                    Thời gian linh hoạt: Sáng - Chiều - Tối - Cuối tuần
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Hỗ trợ trả góp 0% lãi suất</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Cam kết đậu 100% - Học đến khi đậu</span>
                </li>
              </ul>
            </div>

            <RegistrationForm
              courseCode="B1"
              courseTitle="B1 - Số tự động (Phổ biến)"
              phoneDisplay={contact.phoneDisplay}
              phoneRaw={contact.phoneRaw}
              licenseOptions={data.licenseOptions}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
