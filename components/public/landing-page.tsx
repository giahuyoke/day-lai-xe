"use client";

import React from "react";
import {
  Phone,
  CheckCircle,
  Car,
  Calendar,
  Award,
  MapPin,
  Star,
} from "lucide-react";
import {
  SITE_CONTENT,
  formatCurrencyVND,
  formatDiscountVND,
} from "@/lib/content";

const LandingPage = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã đăng ký! Thầy sẽ liên hệ sớm.");
  };

  // Derive frequently changing strings/numbers from SITE_CONTENT
  const { hero, stats, trialOffer, form, pricing, processSteps, contact } =
    SITE_CONTENT;

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      >
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full font-semibold text-sm">
                <Award size={16} /> {hero.tagline}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                {hero.titleMain} <br />
                <span className="text-blue-600">
                  {hero.titleHighlight1}
                </span> -{" "}
                <span className="text-yellow-500">{hero.titleHighlight2}</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => handleScrollTo("pricing")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2"
                >
                  Xem Bảng Giá
                </button>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  Tư Vấn Miễn Phí
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />{" "}
                  {stats.students}+ Học viên
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" /> Tỷ lệ đậu{" "}
                  {stats.passRatePercent}%
                </div>
              </div>
            </div>

            {/* Right Form (Lead Magnet) */}
            <div className="relative animate-fade-in-up delay-100">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {trialOffer.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {trialOffer.description}
                  </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      placeholder="0909..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hạng bằng quan tâm
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                      {form.licenseOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    GỬI ĐĂNG KÝ NGAY
                  </button>
                  <p className="text-xs text-center text-gray-400 italic">
                    Cam kết bảo mật thông tin 100%
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- USP SECTION (Tại sao chọn) --- */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn {SITE_CONTENT.teacherName}?
            </h2>
            <p className="text-gray-600">
              Chúng tôi không chỉ dạy bạn lấy bằng, chúng tôi dạy bạn kỹ năng
              lái xe an toàn suốt đời.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Car size={40} />,
                title: "Xe Tập Đời Mới",
                desc: "100% xe Vios, City đời 2022 trở lên, máy lạnh mát rượi, sạch sẽ, không mùi.",
              },
              {
                icon: <Calendar size={40} />,
                title: "Thời Gian Linh Hoạt",
                desc: "Học viên tự chọn lịch học. Rảnh giờ nào học giờ đó (kể cả Thứ 7, CN).",
              },
              {
                icon: <MapPin size={40} />,
                title: "Đưa Đón Tận Nơi",
                desc: "Hỗ trợ đưa đón tại các điểm gần nhà học viên. Không phải đi xa vất vả.",
              },
              {
                icon: <Award size={40} />,
                title: "Cam Kết Đậu 100%",
                desc: 'Hỗ trợ lý thuyết online 24/7. Mẹo thi thực hành "trăm phát trăm trúng".',
              },
              {
                icon: <Star size={40} />,
                title: "Học 1 Kèm 1",
                desc: "Một thầy một trò. Không nhồi nhét, không chờ đợi. Thầy tận tâm, không quát mắng.",
              },
              {
                icon: <CheckCircle size={40} />,
                title: "Học Phí Trọn Gói",
                desc: "Cam kết không phát sinh dù chỉ 1.000đ (xăng xe, bến bãi, thầy cô...).",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-blue-50 transition-colors duration-300 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Học Phí Ưu Đãi Tháng Này
            </h2>
            <p className="text-gray-400">
              Đăng ký nhóm 2 người giảm ngay{" "}
              <span className="text-yellow-400 font-bold">
                {formatDiscountVND(pricing.groupDiscountVND)}
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.packages.map((pkg) => (
              <div
                key={pkg.code}
                className={
                  pkg.highlight
                    ? "bg-white text-gray-900 rounded-2xl p-8 border-4 border-blue-600 shadow-2xl relative transform md:-translate-y-4"
                    : "bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all relative"
                }
              >
                {pkg.badge && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    {pkg.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p
                  className={
                    pkg.highlight
                      ? "text-gray-500 text-sm mb-6"
                      : "text-gray-400 text-sm mb-6"
                  }
                >
                  {pkg.tagline}
                </p>
                <div
                  className={
                    pkg.highlight
                      ? "text-4xl font-bold text-blue-600 mb-6"
                      : "text-4xl font-bold text-blue-400 mb-6"
                  }
                >
                  {formatCurrencyVND(pkg.priceVND)}
                </div>
                <ul
                  className={
                    pkg.highlight
                      ? "space-y-4 mb-8 text-gray-600"
                      : "space-y-4 mb-8 text-gray-300"
                  }
                >
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckCircle
                        size={20}
                        className={
                          pkg.highlight
                            ? "text-green-500 flex-shrink-0"
                            : "text-blue-500 flex-shrink-0"
                        }
                      />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className={
                    pkg.highlight
                      ? "w-full py-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-bold transition-all shadow-lg"
                      : "w-full py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold transition-all"
                  }
                >
                  {pkg.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lộ Trình Học Chuẩn BGD
            </h2>
            <p className="text-gray-600">
              Quy trình đào tạo bài bản giúp bạn tự tin sau tay lái
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 z-0"></div>

            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className="relative z-10 bg-white p-6 rounded-xl shadow-md text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-yellow-500 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section
        id="contact"
        className="py-20 bg-blue-600 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {contact.ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {contact.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <Phone size={20} /> Gọi Ngay: {contact.phoneDisplay}
            </a>
            <a
              href={`https://zalo.me/${contact.zaloPhone}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              Chat Zalo Tư Vấn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
