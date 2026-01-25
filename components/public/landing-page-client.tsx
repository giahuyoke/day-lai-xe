"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  CheckCircle,
  BookOpen,
  HeadphonesIcon,
  FileCheck,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mail,
  Clock,
  ArrowRight,
  Calendar,
  Star,
  Quote,
} from "lucide-react";
import type { SiteData } from "@/lib/api/services";
import { formatCurrencyVND } from "@/lib/api/services";

interface LandingPageClientProps {
  data: SiteData;
}

const LandingPageClient = ({ data }: LandingPageClientProps) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Auto slide banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % data.hero.bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.hero.bannerImages.length]);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.");
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % data.hero.bannerImages.length);
  };

  const prevBanner = () => {
    setCurrentBanner(
      (prev) =>
        (prev - 1 + data.hero.bannerImages.length) %
        data.hero.bannerImages.length,
    );
  };

  const { pricing, contact, promotions } = data;
  const activePromo = promotions.find((p) => p.isActive);

  const whyChooseUs = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Học 1 kèm 1 tận tâm",
      desc: "Thầy Tùng trực tiếp dạy, không ghép học viên, đảm bảo chất lượng từng buổi học",
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12" />,
      title: "Hỗ trợ 24/7",
      desc: "Giải đáp mọi thắc mắc về lý thuyết, thực hành bất cứ lúc nào qua Zalo/Điện thoại",
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Cam kết đậu 100%",
      desc: "Học đến khi nào đậu thì thôi! Thi rớt - Thầy dạy lại MIỄN PHÍ đến khi đậu",
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "15+ năm kinh nghiệm",
      desc: "Kinh nghiệm giảng dạy thực tế, am hiểu mọi ngóc ngách của kỳ thi sát hạch",
    },
  ];

  return (
    <>
      {/* === HERO SECTION === */}
      <section id="hero" className="relative h-[600px] md:h-[700px]">
        <div className="absolute inset-0 z-0">
          {data.hero.bannerImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentBanner ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Banner ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white transition-all"
          aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white transition-all"
          aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-yellow-400 text-lg md:text-xl font-medium mb-4">
                {data.hero.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {data.hero.titleMain}{" "}
                <span className="text-yellow-400">
                  {data.hero.titleHighlight1}
                </span>
                <br />
                <span className="text-yellow-400">
                  {data.hero.titleHighlight2}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                {data.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleScrollTo("courses")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  Tìm hiểu thêm <ArrowRight size={20} />
                </button>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> {contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {data.hero.bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentBanner
                  ? "bg-yellow-500 w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* === ABOUT SECTION === */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/anh-van-phong.jpg"
                  alt="Thầy Tùng dạy lái xe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-gray-900 p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-4xl font-bold">
                  {data.stats.yearsExperience}+
                </div>
                <div className="text-sm font-medium">Năm kinh nghiệm</div>
              </div>
            </div>

            <div>
              <p className="text-yellow-600 font-semibold uppercase tracking-wider mb-2">
                VỀ THẦY TÙNG
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tại sao nên học lái xe với{" "}
                <span className="text-yellow-500">Thầy Tùng</span>?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thầy Tùng với hơn{" "}
                <strong>{data.stats.yearsExperience} năm kinh nghiệm</strong>{" "}
                đào tạo lái xe, đã giúp{" "}
                <strong>
                  {data.stats.students.toLocaleString()}+ học viên
                </strong>{" "}
                thi đậu bằng lái. Phương châm của thầy: &quot;Học đến khi nào
                đậu thì thôi - Không giới hạn số buổi!&quot;
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Dạy tận tâm 1 kèm 1</strong> - Không ghép học viên,
                    không cắt giờ
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Cam kết giá trọn gói</strong> - Không phát sinh bất
                    kỳ chi phí nào
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Thời gian linh hoạt</strong> - Học sáng/chiều/tối
                    theo lịch của bạn
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Xe đời mới 2023-2024</strong> - Học trên xe giống xe
                    thi sát hạch
                  </span>
                </li>
              </ul>
              <button
                onClick={() => handleScrollTo("contact")}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center gap-2"
              >
                Liên hệ Thầy Tùng <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-600 font-semibold uppercase tracking-wider mb-2">
                CAM KẾT CỦA THẦY TÙNG
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Học lái xe với Thầy Tùng -{" "}
                <span className="text-yellow-500">Bạn được gì?</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-8">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-yellow-500 mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleScrollTo("courses")}
                className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center gap-2"
              >
                Xem khóa học <ArrowRight size={20} />
              </button>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/anh-3-xe.jpg"
                  alt="Tại sao chọn chúng tôi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === PRICING / COURSES === */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-semibold uppercase tracking-wider mb-2">
              PRICING PLANS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chọn khoá học của bạn
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.packages.map((pkg) => (
              <div
                key={pkg.code}
                className={`relative bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-2 ${
                  pkg.highlight
                    ? "shadow-2xl ring-2 ring-yellow-500"
                    : "shadow-xl hover:shadow-2xl"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Giảm 2 triệu
                  </div>
                )}

                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {pkg.title}
                  </h3>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-yellow-600">
                      {formatCurrencyVND(pkg.priceVND)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-4 text-sm">
                    <Calendar size={16} />
                    <span>Khai giảng 25/01</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.slice(0, 4).map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <CheckCircle
                          size={18}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleScrollTo("contact")}
                    className={`w-full py-3 rounded-lg font-bold transition-all ${
                      pkg.highlight
                        ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner-2.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-yellow-500 font-semibold uppercase tracking-wider mb-2">
                CONTACT US
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI!
              </h2>

              {activePromo && (
                <p className="text-gray-300 mb-8 text-lg">
                  Giảm ngay{" "}
                  <span className="text-yellow-500 font-bold">
                    {formatCurrencyVND(activePromo.discountVND)}
                  </span>{" "}
                  cho Học viên đăng ký trước ngày{" "}
                  {new Date(activePromo.validUntil).toLocaleDateString("vi-VN")}
                </p>
              )}

              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { value: countdown.days, label: "Ngày" },
                  { value: countdown.hours, label: "Giờ" },
                  { value: countdown.minutes, label: "Phút" },
                  { value: countdown.seconds, label: "Giây" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur rounded-lg p-4 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-yellow-500">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>

              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <Phone size={36} />
                {contact.phoneDisplay}
              </a>
            </div>

            <div id="contact" className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Đăng ký học với Thầy Tùng
              </h3>
              <p className="text-red-500 font-medium mb-6">
                🔥 Ưu đãi đặc biệt cho 20 học viên đầu tiên trong tháng!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Họ và tên *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Số điện thoại *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Chọn hạng bằng *</option>
                    {data.licenseOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Ghi chú (không bắt buộc)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 rounded-lg transition-all"
                >
                  ĐĂNG KÝ NGAY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* === FEEDBACK / TESTIMONIALS === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-semibold uppercase tracking-wider mb-2">
              FEEDBACK
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Học viên nói gì về{" "}
              <span className="text-yellow-500">Thầy Tùng</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hơn {data.stats.students.toLocaleString()}+ học viên đã tin tưởng
              và đậu bằng lái cùng Thầy Tùng
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.testimonials.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 rounded-2xl p-6 relative hover:shadow-xl transition-shadow"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Quote size={20} className="text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < review.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{review.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">
                      Học viên hạng {review.licenseType} •{" "}
                      {new Date(review.date).toLocaleDateString("vi-VN", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats highlight */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl font-bold text-yellow-600">
                {data.stats.students.toLocaleString()}+
              </div>
              <div className="text-gray-600 text-sm mt-1">Học viên đã đậu</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600">
                {data.stats.passRatePercent}%
              </div>
              <div className="text-gray-600 text-sm mt-1">
                Tỷ lệ đậu ngay lần đầu thi
              </div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600">
                {data.stats.yearsExperience}+
              </div>
              <div className="text-gray-600 text-sm mt-1">Năm kinh nghiệm</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-purple-600">5.0</div>
              <div className="text-gray-600 text-sm mt-1 flex items-center justify-center gap-1">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />{" "}
                Đánh giá
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === GALLERY === */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-600 text-3xl font-semibold uppercase tracking-wider mb-2">
              Thư viện ảnh
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.galleries.vehicles.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTACT INFO === */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="relative w-40 h-16 mb-4">
                <Image
                  src="/logo-vector.png"
                  alt="Logo Lái Xe Thầy Tùng"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Thầy Tùng</strong> - Giáo viên dạy lái xe uy tín tại
                TP.HCM với hơn 5 năm kinh nghiệm. Cam kết dạy tận tâm, học đến
                khi đậu!
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">
                Liên hệ Thầy Tùng
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <MapPin
                    size={18}
                    className="text-yellow-500 flex-shrink-0 mt-0.5"
                  />
                  <span>Phòng ghi danh: {contact.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-yellow-500" />
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="hover:text-yellow-600"
                  >
                    Hotline: {contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-yellow-500" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-yellow-600"
                  >
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={18} className="text-yellow-500" />
                  <span>{contact.workingHours}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Khoá học lái xe</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#courses"
                    className="hover:text-yellow-600 transition-colors"
                  >
                    → Khoá học lái xe B1
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-yellow-600 transition-colors"
                  >
                    → Khoá học lái xe B2
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-yellow-600 transition-colors"
                  >
                    → Khoá học lái xe C
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-yellow-600 transition-colors"
                  >
                    → Bổ túc tay lái
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">
                Gọi ngay Thầy Tùng
              </h4>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex items-center gap-2 text-2xl font-bold text-yellow-600 hover:text-yellow-500 transition-colors"
              >
                <Phone size={24} />
                {contact.phoneDisplay}
              </a>
              <p className="text-sm text-gray-500 mt-2">Tư vấn miễn phí 24/7</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://zalo.me/${contact.zaloPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Zalo"
                >
                  <span className="font-bold text-xs">Zalo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageClient;
