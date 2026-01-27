import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowLeft,
  Clock,
  Award,
  BookOpen,
  Car,
  Shield,
  Phone,
  Star,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import RegistrationForm from "@/components/public/registration-form";
import { getSiteData, formatCurrencyVND } from "@/lib/api/services";

// Force dynamic rendering để fetch data từ Redis
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Học Lái Xe Ô Tô B2 Số Sàn - Bằng B2 Kinh Doanh Grab/Taxi | Thầy Tùng",
  description:
    "Học lái xe ô tô B2 số sàn tại TP.HCM. Xe Xpander đời mới, bằng kinh doanh Grab/Taxi. Học phí 21.800.000đ, trả góp 0%, cam kết đậu 100%. Đăng ký ngay!",
  keywords: [
    "học lái xe b2",
    "bằng lái xe b2",
    "học lái xe số sàn",
    "bằng b2 tphcm",
    "bằng lái grab taxi",
    "dạy lái xe b2 bao đậu",
  ],
  openGraph: {
    title: "Học Lái Xe B2 Số Sàn - Bằng Kinh Doanh Grab/Taxi | Thầy Tùng",
    description: "Xe Xpander đời mới, bằng kinh doanh. Cam kết đậu 100%!",
    images: ["/anh-xe-so-san.jpg"],
  },
};

export default async function CourseB2Page() {
  const data = await getSiteData();
  const course = data.pricing.packages.find((p) => p.code === "B2");
  const { contact } = data;

  if (!course) {
    return <div>Không tìm thấy khóa học</div>;
  }

  const benefits = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Bằng Kinh Doanh",
      desc: "Có thể chạy Grab, Taxi, Be và các dịch vụ vận chuyển hành khách",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Xe Xpander Đời Mới",
      desc: "Học trên xe Xpander số sàn - Giống xe thi sát hạch",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cam Kết Đậu 100%",
      desc: "Học đến khi đậu, không giới hạn số buổi thực hành",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Lái Được Mọi Xe",
      desc: "Bằng B2 lái được cả xe số sàn và số tự động dưới 9 chỗ",
    },
  ];

  const curriculum = [
    {
      title: "Phần 1: Lý Thuyết (Học Online)",
      items: [
        "Luật giao thông đường bộ",
        "600 câu hỏi thi lý thuyết B2",
        "Biển báo, vạch kẻ đường",
        "Mẹo thi lý thuyết đậu 100%",
      ],
    },
    {
      title: "Phần 2: Kỹ Thuật Côn - Số",
      items: [
        "Làm quen với côn, số, ga",
        "Khởi động xe, vào số êm",
        "Lên dốc, xuống dốc an toàn",
        "Sang số mượt mà",
      ],
    },
    {
      title: "Phần 3: Thực Hành Sa Hình",
      items: [
        "Tiến - Lùi chuồng (dọc & ngang)",
        "Dừng xe nhường đường",
        "Đường vuông góc, tốc độ",
        "Qua ngã tư, đường cong",
      ],
    },
    {
      title: "Phần 4: Đường Trường (DAT)",
      items: [
        "Chạy DAT 810km theo quy định",
        "Lái xe ngoài đường thực tế",
        "Xử lý tình huống giao thông",
        "Đi cao tốc, quốc lộ",
      ],
    },
  ];

  const faqs = [
    {
      q: "Bằng B2 có lái xe số tự động được không?",
      a: "Được! Bằng B2 cho phép lái cả xe số sàn và số tự động dưới 9 chỗ. Đây là ưu điểm lớn so với bằng B1 chỉ lái được số tự động.",
    },
    {
      q: "Bằng B2 có chạy Grab, Taxi được không?",
      a: "Được! Bằng B2 là bằng kinh doanh, cho phép chạy Grab, Taxi, Be, và các dịch vụ vận chuyển hành khách hợp pháp.",
    },
    {
      q: "Học số sàn có khó không?",
      a: "Ban đầu có thể hơi khó với việc phối hợp côn - số - ga. Nhưng với phương pháp dạy 1 kèm 1 của Thầy Tùng, bạn sẽ thành thạo chỉ sau vài buổi!",
    },
    {
      q: "Thời gian học bằng B2 là bao lâu?",
      a: "Thời gian đào tạo từ 2.5-3.5 tháng. Bạn cần hoàn thành tối thiểu 810km đường trường (DAT) theo quy định.",
    },
    {
      q: "So với B1, B2 có gì khác?",
      a: "B2 học số sàn (khó hơn B1 một chút), nhưng được lái mọi loại xe dưới 9 chỗ và được dùng kinh doanh. Nên học B2 nếu muốn chạy Grab/Taxi.",
    },
  ];

  const whyB2 = [
    {
      title: "Kinh Doanh Grab/Taxi",
      desc: "Tăng thu nhập với công việc tự do, linh hoạt thời gian",
      icon: "💰",
    },
    {
      title: "Lái Được Mọi Xe",
      desc: "Cả số sàn lẫn số tự động, không giới hạn",
      icon: "🚗",
    },
    {
      title: "Giá Trị Lâu Dài",
      desc: "Một lần học, cả đời sử dụng, đa dạng mục đích",
      icon: "📈",
    },
    {
      title: "Kỹ Năng Chuyên Nghiệp",
      desc: "Thành thạo côn số, tự tin mọi địa hình",
      icon: "🏆",
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
      <section className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-white" />
                Phổ biến nhất - Bằng kinh doanh
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Khóa Học Lái Xe{" "}
                <span className="text-white">Hạng B Số Sàn</span>
                <br />
                <span className="text-2xl md:text-3xl font-normal text-gray-800">
                  Số Sàn - Kinh Doanh Grab/Taxi
                </span>
              </h1>
              <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                Bằng lái ô tô B2 - Lựa chọn thông minh! Lái được mọi xe, kinh
                doanh được ngay. Học phí chỉ{" "}
                <span className="text-white font-bold bg-gray-900 px-2 py-1 rounded">
                  {formatCurrencyVND(course.priceVND)}
                </span>
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-gray-900/20 px-4 py-2 rounded-lg text-gray-900">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">2.5-3.5 tháng</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/20 px-4 py-2 rounded-lg text-gray-900">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">810km DAT</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/20 px-4 py-2 rounded-lg text-gray-900">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Bao đậu 100%</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#register"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all text-center"
                >
                  Đăng Ký Ngay
                </a>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all text-center flex items-center justify-center gap-2"
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
                  alt="Học lái xe B Số Sàn"
                  fill
                  className="object-cover"
                  priority
                />
                {course.badge && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                    {course.badge}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gray-900 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-yellow-400">
                  {formatCurrencyVND(course.priceVND)}
                </div>
                <div className="text-sm text-gray-300">Trả góp 0% lãi suất</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why B2 */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Tại Sao Nên Học Bằng B Số Sàn?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyB2.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-yellow-400 mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Học Bằng <span className="text-yellow-500">B Số Sàn</span> Tại{" "}
            <span className="text-yellow-500">Thầy Tùng</span> - Bạn Được Gì?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors"
              >
                <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
            Nội Dung Khóa Học B Số Sàn Chi Tiết
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {curriculum.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
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
      </section>

      {/* Pricing Details */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Chi Tiết Học Phí B Số Sàn
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-yellow-500 text-gray-900 p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  {formatCurrencyVND(course.priceVND)}
                </div>
                <div className="text-yellow-800">
                  Trọn gói - Bằng kinh doanh Grab/Taxi
                </div>
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
                      ✓ Thi lại miễn phí
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                      ✓ Bằng kinh doanh Grab/Taxi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison B1 vs B2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            So Sánh Bằng B Số Tự Động và B Số Sàn
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-50 rounded-xl overflow-hidden">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Tiêu chí</th>
                    <th className="px-6 py-4 text-center">Bằng B số tự động</th>
                    <th className="px-6 py-4 text-center bg-yellow-500 text-gray-900">
                      Bằng B số sàn ⭐
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Loại xe</td>
                    <td className="px-6 py-4 text-center">Chỉ số tự động</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">
                      Cả số sàn & tự động
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">Kinh doanh</td>
                    <td className="px-6 py-4 text-center text-red-500">
                      Không được
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">
                      Grab, Taxi, Be...
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Km DAT</td>
                    <td className="px-6 py-4 text-center">710km</td>
                    <td className="px-6 py-4 text-center">810km</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">Độ khó</td>
                    <td className="px-6 py-4 text-center">Dễ hơn</td>
                    <td className="px-6 py-4 text-center">Khó hơn một chút</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Đề xuất</td>
                    <td className="px-6 py-4 text-center">Đi lại cá nhân</td>
                    <td className="px-6 py-4 text-center font-bold text-yellow-600">
                      Đa mục đích, kinh doanh
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Câu Hỏi Thường Gặp Về Bằng B Số Sàn
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
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
      <section id="register" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Đăng Ký Học Bằng B Số Sàn - Mở Ra Cơ Hội Mới!
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Bằng B Số Sàn không chỉ là bằng lái xe, mà còn là cơ hội nghề
                nghiệp. Kinh doanh Grab, Taxi hay đơn giản là tự tin lái mọi
                loại xe!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Học trên xe Xpander số sàn đời mới</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Thầy Tùng trực tiếp dạy 1 kèm 1</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Hỗ trợ trả góp 0% - Không áp lực tài chính</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Cam kết đậu 100% - Học đến khi đậu</span>
                </li>
              </ul>
            </div>

            <RegistrationForm
              courseCode="Bằng B2"
              courseTitle="B2 - Số sàn (Chuyên nghiệp)"
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
