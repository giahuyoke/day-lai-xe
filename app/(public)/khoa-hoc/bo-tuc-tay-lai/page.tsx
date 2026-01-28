import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowLeft,
  Clock,
  Award,
  Shield,
  Phone,
  Star,
  Car,
  Target,
  Heart,
} from "lucide-react";
import RegistrationForm from "@/components/public/registration-form";
import { getSiteData, formatCurrencyVND } from "@/lib/api/services";

// Force dynamic rendering để fetch data từ Redis
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Bổ Túc Tay Lái - Nâng Cao Kỹ Năng Lái Xe An Toàn | Thầy Tùng",
  description:
    "Khóa bổ túc tay lái cho người đã có bằng. Chỉ 600.000đ/giờ, học 1 kèm 1, thời gian linh hoạt. Nâng cao kỹ năng, tự tin cầm lái. Đăng ký ngay!",
  keywords: [
    "bổ túc tay lái",
    "học lái xe nâng cao",
    "luyện tay lái",
    "kỹ năng lái xe",
    "bổ túc lái xe tphcm",
    "học lái xe thêm giờ",
  ],
  openGraph: {
    title: "Bổ Túc Tay Lái - Tự Tin Cầm Lái | Thầy Tùng",
    description: "Chỉ 600.000đ/giờ, học 1 kèm 1. Nâng cao kỹ năng lái xe!",
    images: ["/bo-tuc.jpg"],
  },
};

export default async function BoTucTayLaiPage() {
  const data = await getSiteData();
  const course = data.pricing.packages.find((p) => p.code === "Bổ túc tay lái");
  const { contact } = data;

  if (!course) {
    return <div>Không tìm thấy khóa học</div>;
  }

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Học Theo Yêu Cầu",
      desc: "Tập trung vào điểm yếu của bạn: đỗ xe, lùi xe, đường đông...",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Thời Gian Linh Hoạt",
      desc: "Sáng, chiều, tối hoặc cuối tuần - bạn chọn giờ học",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Nhẹ Nhàng, Thoải Mái",
      desc: "Không áp lực thi cử, học trong môi trường thân thiện",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "An Toàn Tuyệt Đối",
      desc: "Xe có phanh phụ, thầy luôn sẵn sàng hỗ trợ bạn",
    },
  ];

  const forWhom = [
    {
      title: "Có bằng nhưng ít đi",
      desc: "Bạn đã có bằng lái nhưng ít có cơ hội lái xe, muốn luyện lại kỹ năng",
      icon: "🚗",
    },
    {
      title: "Mới mua xe",
      desc: "Vừa mua xe mới, muốn làm quen với xe trước khi tự lái",
      icon: "🆕",
    },
    {
      title: "Sợ đường đông",
      desc: "Tự tin trong sân tập nhưng lo lắng khi ra đường thực tế",
      icon: "😰",
    },
    {
      title: "Muốn nâng cao",
      desc: "Đã biết lái nhưng muốn hoàn thiện kỹ năng chuyên nghiệp hơn",
      icon: "📈",
    },
  ];

  const learnTopics = [
    "Đỗ xe song song (ghép xe)",
    "Lùi xe vào chuồng (garage)",
    "Quay đầu xe trong ngõ hẹp",
    "Lái xe đường đông, giờ cao điểm",
    "Đổi làn, vượt xe an toàn",
    "Lái xe đường cao tốc",
    "Lái xe ban đêm",
    "Xử lý tình huống bất ngờ",
  ];

  const faqs = [
    {
      q: "Tôi có bằng B1, có học bổ túc được không?",
      a: "Được! Khóa bổ túc dành cho tất cả những ai đã có bằng lái (B1, B2, C...) muốn nâng cao kỹ năng hoặc luyện lại tay lái.",
    },
    {
      q: "Một buổi học bổ túc kéo dài bao lâu?",
      a: "Mỗi buổi học kéo dài 1 giờ (60 phút). Bạn có thể đăng ký nhiều giờ liên tiếp nếu muốn học dài hơn.",
    },
    {
      q: "Học bổ túc trên xe gì?",
      a: "Bạn có thể học trên xe của chúng tôi (Honda Civic, Xpander) hoặc xe của bạn nếu muốn làm quen với xe mới mua.",
    },
    {
      q: "Tôi có thể chọn nội dung học không?",
      a: "Hoàn toàn được! Bạn cho thầy biết điểm yếu hoặc kỹ năng muốn cải thiện, thầy sẽ thiết kế buổi học phù hợp.",
    },
    {
      q: "Có cần đặt lịch trước không?",
      a: "Nên đặt lịch trước 1 ngày để thầy sắp xếp. Tuy nhiên, bạn có thể gọi trực tiếp để kiểm tra lịch trống.",
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
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-purple-300" />
                Cho người đã có bằng
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bổ Túc <span className="text-yellow-400">Tay Lái</span>
                <br />
                <span className="text-2xl md:text-3xl font-normal text-gray-300">
                  Tự Tin Cầm Lái Mọi Cung Đường
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Đã có bằng nhưng chưa tự tin? Khóa bổ túc tay lái chỉ{" "}
                <span className="text-yellow-400 font-bold">
                  {formatCurrencyVND(course.priceVND)}/giờ
                </span>
                . Học 1 kèm 1, nội dung theo yêu cầu, không áp lực!
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>60 phút/buổi</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Car className="w-5 h-5 text-yellow-400" />
                  <span>Học trên xe bạn muốn</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Nội dung tùy chọn</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#register"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center"
                >
                  Đăng Ký Ngay - {formatCurrencyVND(course.priceVND)}/giờ
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
                  alt="Bổ túc tay lái"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">
                  {formatCurrencyVND(course.priceVND)}
                </div>
                <div className="text-sm font-medium">/ 1 giờ học</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Khóa Bổ Túc Phù Hợp Với Ai?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {forWhom.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại Sao Chọn Bổ Túc Tại{" "}
            <span className="text-yellow-500">Thầy Tùng</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Bạn Có Thể Học Những Gì?
              </h2>
              <p className="text-gray-600 mb-6">
                Nội dung hoàn toàn theo yêu cầu của bạn. Dưới đây là một số chủ
                đề phổ biến:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {learnTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quyền Lợi Khi Học Bổ Túc
              </h3>
              <ul className="space-y-4">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-purple-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {formatCurrencyVND(course.priceVND)}
                  </div>
                  <div className="text-gray-500 text-sm">/ 1 giờ (60 phút)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Gói Học Bổ Túc
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Gói 1 Giờ
              </h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">
                {formatCurrencyVND(600000)}
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ 1 giờ học (60 phút)</li>
                <li>✓ Nội dung tùy chọn</li>
                <li>✓ Phù hợp trải nghiệm</li>
              </ul>
              <a
                href="#register"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Đăng ký
              </a>
            </div>

            <div className="bg-purple-600 text-white rounded-2xl p-6 shadow-xl transform scale-105">
              <div className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full inline-block mb-2 font-medium">
                Phổ biến nhất
              </div>
              <h3 className="text-xl font-bold mb-2">Gói 5 Giờ</h3>
              <div className="text-3xl font-bold mb-1">
                {formatCurrencyVND(2500000)}
              </div>
              <div className="text-purple-200 text-sm mb-4">
                Tiết kiệm {formatCurrencyVND(500000)}
              </div>
              <ul className="space-y-2 text-sm text-purple-100 mb-6">
                <li>✓ 5 giờ học</li>
                <li>✓ Chỉ 500.000đ/giờ</li>
                <li>✓ Đủ để tự tin cầm lái</li>
              </ul>
              <a
                href="#register"
                className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 rounded-lg font-bold text-center transition-colors"
              >
                Đăng ký ngay
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Gói 10 Giờ
              </h3>
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {formatCurrencyVND(4500000)}
              </div>
              <div className="text-green-600 text-sm mb-4">
                Tiết kiệm {formatCurrencyVND(1500000)}
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ 10 giờ học</li>
                <li>✓ Chỉ 450.000đ/giờ</li>
                <li>✓ Trở thành tài xế pro</li>
              </ul>
              <a
                href="#register"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors"
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
      <section id="register" className="py-16 bg-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sẵn Sàng Tự Tin Cầm Lái?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Đừng để nỗi sợ cản bước bạn! Chỉ cần vài buổi học bổ túc, bạn sẽ
                tự tin điều khiển xe trên mọi cung đường.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Học 1 kèm 1, thoải mái hỏi đáp</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Nội dung theo yêu cầu của bạn</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Thời gian linh hoạt, kể cả cuối tuần</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Không áp lực, học trong môi trường thân thiện</span>
                </li>
              </ul>
            </div>

            <RegistrationForm
              courseCode="Bổ túc tay lái"
              courseTitle="Bổ túc tay lái"
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
