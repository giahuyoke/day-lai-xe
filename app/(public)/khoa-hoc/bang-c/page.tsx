import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowLeft,
  Clock,
  Award,
  BookOpen,
  Shield,
  Phone,
  Truck,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import RegistrationForm from "@/components/public/registration-form";
import { getSiteData, formatCurrencyVND } from "@/lib/api/services";

// Force dynamic rendering để fetch data từ Redis
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Học Lái Xe Tải Hạng C - Bằng C Xe Tải Trên 3.5 Tấn | Thầy Tùng",
  description:
    "Học lái xe tải hạng C tại TP.HCM. Học phí 23.800.000đ, xe Hyundai/Isuzu. Bằng lái xe tải trên 3.5 tấn, cơ hội việc làm lương cao. Đăng ký ngay!",
  keywords: [
    "học lái xe hạng c",
    "bằng lái xe tải",
    "học lái xe tải",
    "bằng c tphcm",
    "xe tải trên 3.5 tấn",
    "việc làm lái xe tải",
  ],
  openGraph: {
    title: "Học Lái Xe Tải Hạng C - Lương Cao, Việc Nhiều | Thầy Tùng",
    description: "Xe Hyundai/Isuzu, hỗ trợ giới thiệu việc làm. Cam kết đậu!",
    images: ["/anh-xe-tai.jpg"],
  },
};

export default async function CourseCPage() {
  const data = await getSiteData();
  const course = data.pricing.packages.find((p) => p.code === "C");
  const { contact } = data;

  if (!course) {
    return <div>Không tìm thấy khóa học</div>;
  }

  const benefits = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Xe Tải Chất Lượng",
      desc: "Học trên xe Hyundai, Isuzu đời mới, bảo dưỡng định kỳ",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Việc Làm Lương Cao",
      desc: "Lái xe tải lương 15-25 triệu/tháng, nhu cầu tuyển dụng cao",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cam Kết Vững Tay Nghề",
      desc: "Đào tạo kỹ năng chuyên nghiệp, tự tin làm việc ngay",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Hỗ Trợ Việc Làm",
      desc: "Kết nối với các công ty vận tải uy tín sau khi có bằng",
    },
  ];

  const curriculum = [
    {
      title: "Phần 1: Lý Thuyết",
      items: [
        "Luật giao thông áp dụng cho xe tải",
        "An toàn khi vận chuyển hàng hóa",
        "Quy định về trọng tải, kích thước",
        "Xử lý sự cố kỹ thuật cơ bản",
      ],
    },
    {
      title: "Phần 2: Kỹ Thuật Lái Xe Tải",
      items: [
        "Làm quen với xe tải, các bộ phận",
        "Kỹ thuật côn - số xe tải",
        "Lên dốc, xuống dốc an toàn",
        "Phanh xe tải đúng cách",
      ],
    },
    {
      title: "Phần 3: Thực Hành Sa Hình",
      items: [
        "Tiến - Lùi chuồng xe tải",
        "Đường vuông góc, ghép xe",
        "Qua ngã tư, vòng xuyến",
        "Dừng đỗ xe đúng quy định",
      ],
    },
    {
      title: "Phần 4: Đường Trường & Sát Hạch",
      items: [
        "Lái xe ngoài đường thực tế",
        "Kỹ năng lái xe đường dài",
        "Ôn thi và thi sát hạch",
        "Nhận bằng và hỗ trợ việc làm",
      ],
    },
  ];

  const faqs = [
    {
      q: "Bằng C lái được xe gì?",
      a: "Bằng C cho phép lái xe tải có trọng tải trên 3.5 tấn, xe chuyên dùng có trọng tải thiết kế trên 3.5 tấn. Bằng C cũng bao gồm quyền lái các xe của bằng B2, B1.",
    },
    {
      q: "Học bằng C mất bao lâu?",
      a: "Thời gian đào tạo từ 3-4 tháng, bao gồm cả lý thuyết, thực hành sa hình và đường trường.",
    },
    {
      q: "Cần có bằng B2 trước không?",
      a: "Không bắt buộc! Bạn có thể học thẳng lên bằng C. Tuy nhiên nếu đã có bằng B2, thời gian học sẽ ngắn hơn.",
    },
    {
      q: "Lái xe tải lương bao nhiêu?",
      a: "Lương lái xe tải tại TP.HCM dao động từ 15-25 triệu/tháng tùy theo loại xe, tuyến đường và kinh nghiệm. Đây là nghề có thu nhập ổn định và nhu cầu cao.",
    },
    {
      q: "Có được giới thiệu việc làm không?",
      a: "Có! Sau khi có bằng, chúng tôi sẽ hỗ trợ kết nối với các công ty vận tải uy tín đang tuyển dụng.",
    },
  ];

  const jobOpportunities = [
    { title: "Lái xe tải đường dài", salary: "20-25 triệu/tháng" },
    { title: "Lái xe tải nội thành", salary: "15-20 triệu/tháng" },
    { title: "Lái xe chở hàng cho DN", salary: "12-18 triệu/tháng" },
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Truck className="w-4 h-4" />
                Nghề nghiệp ổn định - Lương cao
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Khóa Học Lái Xe Tải{" "}
                <span className="text-yellow-400">Hạng C</span>
                <br />
                <span className="text-2xl md:text-3xl font-normal text-gray-300">
                  Xe Tải Trên 3.5 Tấn
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Mở ra cơ hội nghề nghiệp với bằng lái hạng C! Học phí{" "}
                <span className="text-yellow-400 font-bold">
                  {formatCurrencyVND(course.priceVND)}
                </span>
                , cam kết vững tay nghề và hỗ trợ giới thiệu việc làm sau khi
                tốt nghiệp.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>3-4 tháng</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-yellow-400" />
                  <span>Xe trên 3.5 tấn</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Hỗ trợ việc làm</span>
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
                  alt="Học lái xe hạng C"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">
                  {formatCurrencyVND(course.priceVND)}
                </div>
                <div className="text-sm font-medium">Hỗ trợ việc làm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            💼 Cơ Hội Việc Làm Sau Khi Có Bằng C
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {jobOpportunities.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 text-center shadow-lg"
              >
                <h3 className="font-bold text-gray-900 mb-1">{job.title}</h3>
                <p className="text-yellow-600 font-bold">{job.salary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại Sao Nên Học Bằng C Tại{" "}
            <span className="text-yellow-500">Thầy Tùng</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nội Dung Khóa Học Hạng C Chi Tiết
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {curriculum.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-4">
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
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Chi Tiết Học Phí Hạng C
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-blue-700 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  {formatCurrencyVND(course.priceVND)}
                </div>
                <div className="text-blue-200">Trọn gói - Hỗ trợ việc làm</div>
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
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                      ✓ Xe tải Hyundai/Isuzu
                    </div>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
                      ✓ Không giới hạn số buổi học thực hành
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-medium">
                      ✓ Trả góp 0%
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
            Câu Hỏi Thường Gặp Về Bằng C
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors"
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
      <section id="register" className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mở Ra Cơ Hội Nghề Nghiệp Với Bằng C!
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Lái xe tải là nghề có thu nhập cao và ổn định. Đăng ký ngay để
                bắt đầu hành trình mới với sự hỗ trợ tận tình của Thầy Tùng!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Học trên xe tải Hyundai/Isuzu</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Cam kết vững tay nghề, tự tin làm việc</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Hỗ trợ giới thiệu việc làm sau khi có bằng</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Lương 15-25 triệu/tháng chờ bạn!</span>
                </li>
              </ul>
            </div>

            <RegistrationForm
              courseCode="C"
              courseTitle="C - Xe tải"
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
