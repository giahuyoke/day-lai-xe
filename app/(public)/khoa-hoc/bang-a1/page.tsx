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
} from "lucide-react";
import RegistrationForm from "@/components/public/registration-form";
import { getSiteData, formatCurrencyVND } from "@/lib/api/services";

// Force dynamic rendering để fetch data từ Redis
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Học Lái Xe Máy A1 - Bằng A1 Giá Rẻ Bao Đậu 100% | Thầy Tùng",
  description:
    "Học lái xe máy hạng A1 tại TP.HCM. Học phí chỉ 800.000đ, bao trọn gói lệ phí thi, cam kết đậu 100%. Chạy xe 50cc-125cc, xe điện 4kw-11kw. Đăng ký ngay!",
  keywords: [
    "học lái xe máy a1",
    "bằng lái xe máy a1",
    "thi bằng a1",
    "học lái xe máy giá rẻ",
    "bằng a1 tphcm",
    "học lái xe máy bao đậu",
  ],
  openGraph: {
    title: "Học Lái Xe Máy A1 - Bao Đậu 100% | Thầy Tùng",
    description: "Học phí chỉ 800.000đ, bao trọn gói. Cam kết đậu 100%!",
    images: ["/xe-may.jpg"],
  },
};

export default async function CourseA1Page() {
  const data = await getSiteData();
  const course = data.pricing.packages.find((p) => p.code === "A1");
  const { contact } = data;

  if (!course) {
    return <div>Không tìm thấy khóa học</div>;
  }

  const benefits = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Xe Tập Chất Lượng",
      desc: "Tập lái trên xe máy đời mới, bảo dưỡng định kỳ, an toàn tuyệt đối",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Học 1 Kèm 1",
      desc: "Không ghép học viên, thầy hướng dẫn tận tình từng động tác",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cam Kết Đậu 100%",
      desc: "Học đến khi đậu, hỗ trợ thi lại miễn phí nếu rớt",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Bao Trọn Gói",
      desc: "Không phát sinh chi phí, bao gồm lệ phí thi & làm bằng",
    },
  ];

  const curriculum = [
    {
      title: "Phần 1: Lý Thuyết",
      items: [
        "Luật giao thông đường bộ cơ bản",
        "Biển báo giao thông quan trọng",
        "Kỹ năng xử lý tình huống",
        "Mẹo thi lý thuyết đậu 100%",
      ],
    },
    {
      title: "Phần 2: Thực Hành",
      items: [
        "Làm quen với xe máy, các bộ phận",
        "Tập khởi động, dừng xe an toàn",
        "Đi vòng số 8, đi trên ván hẹp",
        "Tập đi đường trường thực tế",
      ],
    },
    {
      title: "Phần 3: Ôn Thi & Sát Hạch",
      items: [
        "Ôn tập lý thuyết chuyên sâu",
        "Luyện thi thực hành như thi thật",
        "Hướng dẫn tâm lý phòng thi",
        "Sát hạch tại sân thi chính thức",
      ],
    },
  ];

  const faqs = [
    {
      q: "Học bằng A1 mất bao lâu?",
      a: "Thời gian học từ 1-2 tuần tùy theo lịch của bạn. Bạn có thể học buổi sáng, chiều hoặc tối đều được.",
    },
    {
      q: "Bằng A1 chạy được xe gì?",
      a: "Bằng A1 cho phép lái xe máy từ 50cc đến dưới 175cc và xe máy điện từ 4kW đến 11kW.",
    },
    {
      q: "Có cần biết đi xe máy trước không?",
      a: "Không cần! Thầy sẽ dạy từ đầu, từ cách cầm tay lái đến khi bạn thành thạo.",
    },
    {
      q: "Học phí đã bao gồm những gì?",
      a: "Học phí đã bao gồm: Phí đào tạo, phí thi lý thuyết, phí thi thực hành, phí làm bằng. Không phát sinh thêm chi phí nào.",
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
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-yellow-400" />
                Khóa học phổ biến nhất
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Khóa Học Lái Xe Máy{" "}
                <span className="text-yellow-400">Hạng A1</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Sở hữu bằng lái xe máy A1 chỉ với{" "}
                <span className="text-yellow-400 font-bold">
                  {formatCurrencyVND(course.priceVND)}
                </span>
                . Bao trọn gói lệ phí thi, cam kết đậu 100%. Phù hợp cho người
                mới bắt đầu!
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>1-2 tuần</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-yellow-400" />
                  <span>Xe 50cc - 125cc hoặc xe điện từ 4kw - 11kw </span>
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
                  alt="Học lái xe máy A1"
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
            Tại Sao Nên Học Bằng A1 Tại{" "}
            <span className="text-yellow-500">Thầy Tùng</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors"
              >
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h2 className="text-3xl font-bold mb-8">Nội Dung Khóa Học A1</h2>
              <div className="space-y-6">
                {curriculum.map((section, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-yellow-600 mb-4">
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
      <section id="register" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Đăng Ký Học Bằng A1 Ngay Hôm Nay!
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Chỉ với {formatCurrencyVND(course.priceVND)}, bạn sẽ có bằng lái
                xe máy A1 trong tay. Thầy Tùng cam kết đào tạo tận tâm, học đến
                khi đậu!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Khai giảng liên tục, học ngay khi đăng ký</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Thời gian linh hoạt: Sáng - Chiều - Tối</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Hỗ trợ đưa đón tại các quận trung tâm</span>
                </li>
              </ul>
            </div>

            <RegistrationForm
              courseCode="A1"
              courseTitle="A1 - Xe máy (Phổ biến)"
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
