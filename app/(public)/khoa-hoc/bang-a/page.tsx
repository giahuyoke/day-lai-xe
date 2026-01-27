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
  Shield,
  Phone,
  Zap,
} from "lucide-react";
import RegistrationForm from "@/components/public/registration-form";
import { getSiteData, formatCurrencyVND } from "@/lib/api/services";

// Force dynamic rendering để fetch data từ Redis
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Học Lái Xe Máy Hạng A - Bằng A Phân Khối Lớn | Thầy Tùng",
  description:
    "Học lái xe máy hạng A trên 175cc tại TP.HCM. Học phí 1.800.000đ, tập xe SH không phát sinh chi phí. Bao đậu 100%, hỗ trợ thi lại miễn phí. Đăng ký ngay!",
  keywords: [
    "học lái xe máy hạng a",
    "bằng lái xe máy a",
    "bằng a phân khối lớn",
    "học lái sh",
    "bằng a tphcm",
    "xe máy trên 175cc",
  ],
  openGraph: {
    title: "Học Lái Xe Máy Hạng A - Phân Khối Lớn | Thầy Tùng",
    description: "Học phí 1.800.000đ, tập xe SH. Bao đậu 100%!",
    images: ["/bang_lai_xe_sh.jpg"],
  },
};

export default async function CourseAPage() {
  const data = await getSiteData();
  const course = data.pricing.packages.find((p) => p.code === "A");
  const { contact } = data;

  if (!course) {
    return <div>Không tìm thấy khóa học</div>;
  }

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Xe Phân Khối Lớn",
      desc: "Tập lái trên xe SH và các dòng xe đến 175cc phổ biến",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Giáo Viên Chuyên Nghiệp",
      desc: "Thầy có nhiều năm kinh nghiệm",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "An Toàn Tuyệt Đối",
      desc: "Trang bị đầy đủ bảo hộ, học trên sân tập riêng biệt",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Bao Đậu 100%",
      desc: "Cam kết đậu, hỗ trợ thi lại hoàn toàn miễn phí",
    },
  ];

  const curriculum = [
    {
      title: "Phần 1: Lý Thuyết Nâng Cao",
      items: ["Kỹ thuật điều khiển xe", "An toàn khi tham gia giao thông"],
    },
    {
      title: "Phần 2: Thực Hành Chuyên Sâu",
      items: [
        "Làm quen với xe SH",
        "Kỹ thuật cân bằng với xe nặng",
        "Đi vòng số 8, ván hẹp với xe SH",
        "Phanh an toàn, xử lý góc cua",
      ],
    },
    {
      title: "Phần 3: Ôn Thi & Sát Hạch",
      items: [
        "Ôn tập lý thuyết chuyên sâu",
        "Luyện thi thực hành chuẩn sát hạch",
        "Kỹ năng tâm lý phòng thi",
        "Sát hạch và nhận bằng",
      ],
    },
  ];

  const faqs = [
    {
      q: "Bằng A khác bằng A1 như thế nào?",
      a: "Bằng A cho phép lái xe máy từ 175cc trở lên, trong khi bằng A1 chỉ cho phép lái xe dưới 175cc. Nếu bạn có bằng A, bạn được lái tất cả các loại xe máy.",
    },
    {
      q: "Tôi có bằng A1 rồi, có cần học lại không?",
      a: "Có, bạn cần học và thi riêng để lấy bằng A. Tuy nhiên, với kinh nghiệm đã có, thời gian học sẽ ngắn hơn.",
    },
    {
      q: "Học bằng A mất bao lâu?",
      a: "Thời gian học từ 2-3 tuần tùy theo lịch của bạn. Do xe PKL cần kỹ năng cao hơn nên cần thêm thời gian luyện tập.",
    },
    {
      q: "Có được tập trên xe SH không?",
      a: "Có! Chúng tôi có xe SH, PCX để học viên tập luyện, không phát sinh thêm chi phí.",
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Xe đến 175cc
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Khóa Học Lái Xe Máy{" "}
                <span className="text-yellow-400">Hạng A</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Chinh phục xe phân khối lớn với bằng lái hạng A. Học phí chỉ{" "}
                <span className="text-yellow-400 font-bold">
                  {formatCurrencyVND(course.priceVND)}
                </span>
                . Tập xe SH không phát sinh chi phí, bao đậu 100%!
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>2-3 tuần</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-yellow-400" />
                  <span>Xe đến 175cc</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Tập xe SH</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#register"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center"
                >
                  Đăng Ký Ngay - {formatCurrencyVND(course.priceVND)}
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
                  alt="Học lái xe máy hạng A"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">
                  {formatCurrencyVND(course.priceVND)}
                </div>
                <div className="text-sm font-medium">Trọn gói</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại Sao Nên Học Bằng A Tại{" "}
            <span className="text-yellow-500">Thầy Tùng</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Nội Dung Khóa Học Hạng A
              </h2>
              <div className="space-y-6">
                {curriculum.map((section, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">
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

            <div>
              <h2 className="text-3xl font-bold mb-8">Quyền Lợi Học Viên</h2>
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Học phí {formatCurrencyVND(course.priceVND)} đã bao gồm:
                </h3>
                <ul className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
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
                Chinh Phục bằng A Ngay Hôm Nay!
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Với bằng A, bạn có thể tự do điều khiển mọi loại xe máy đến
                175cc. Đăng ký ngay để được tập trên xe SH với giáo viên chuyên
                nghiệp!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Tập xe SH không phát sinh chi phí</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Giáo viên có chứng chỉ PKL chuyên nghiệp</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Sân tập riêng biệt, an toàn tuyệt đối</span>
                </li>
              </ul>
            </div>

            <RegistrationForm
              courseCode="A"
              courseTitle="A - Xe máy (Trên 125cc)"
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
