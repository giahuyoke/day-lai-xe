"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SiteData } from "@/lib/api/services";

export default function AdminDashboardPage() {
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState("contact");
  const router = useRouter();

  const fetchData = useCallback(
    async (passcode: string) => {
      try {
        const res = await fetch(
          `/api/admin/update-site-data?passcode=${passcode}`,
        );
        const data = await res.json();

        if (data.success) {
          setSiteData(data.data);
        } else {
          localStorage.removeItem("admin_passcode");
          router.push("/admin/login");
        }
      } catch {
        setMessage({ type: "error", text: "Lỗi tải dữ liệu" });
      } finally {
        setLoading(false);
      }
    },
    [router],
  );

  useEffect(() => {
    const passcode = localStorage.getItem("admin_passcode");
    if (!passcode) {
      router.push("/admin/login");
      return;
    }
    fetchData(passcode);
  }, [router, fetchData]);

  const handleSave = async () => {
    const passcode = localStorage.getItem("admin_passcode");
    if (!passcode || !siteData) return;

    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/update-site-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode, siteData }),
      });
      const data = await res.json();

      if (data.success) {
        setMessage({ type: "success", text: "Lưu thành công! 🎉" });
      } else {
        setMessage({ type: "error", text: data.error });
      }
    } catch {
      setMessage({ type: "error", text: "Lỗi kết nối server" });
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_passcode");
    router.push("/admin/login");
  };

  const updateField = (path: string, value: unknown) => {
    if (!siteData) return;

    const keys = path.split(".");
    const newData = JSON.parse(JSON.stringify(siteData));

    let current: Record<string, unknown> = newData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]] as Record<string, unknown>;
    }
    current[keys[keys.length - 1]] = value;

    setSiteData(newData);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (!siteData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-600">Không thể tải dữ liệu</p>
      </div>
    );
  }

  const tabs = [
    { id: "contact", label: "📞 Liên hệ", icon: "phone" },
    { id: "hero", label: "🏠 Trang chủ", icon: "home" },
    { id: "stats", label: "📊 Thống kê", icon: "chart" },
    { id: "pricing", label: "💰 Bảng giá", icon: "money" },
    { id: "promotions", label: "🎁 Khuyến mãi", icon: "gift" },
    { id: "testimonials", label: "⭐ Đánh giá", icon: "star" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">
            🚗 Admin - Lái Xe Thầy Tùng
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {saving ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Đang lưu...
                </>
              ) : (
                <>💾 Lưu thay đổi</>
              )}
            </button>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </header>

      {/* Message */}
      {message && (
        <div
          className={`fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
            message.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6 p-2 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Contact Tab */}
          {activeTab === "contact" && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-4">
                Thông tin liên hệ
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Số điện thoại (hiển thị)"
                  value={siteData.contact.phoneDisplay}
                  onChange={(v) => updateField("contact.phoneDisplay", v)}
                />
                <InputField
                  label="Số điện thoại (gọi)"
                  value={siteData.contact.phoneRaw}
                  onChange={(v) => updateField("contact.phoneRaw", v)}
                />
                <InputField
                  label="Zalo"
                  value={siteData.contact.zaloPhone}
                  onChange={(v) => updateField("contact.zaloPhone", v)}
                />
                <InputField
                  label="Hotline (hiển thị)"
                  value={siteData.contact.hotlineDisplay}
                  onChange={(v) => updateField("contact.hotlineDisplay", v)}
                />
                <InputField
                  label="Hotline (gọi)"
                  value={siteData.contact.hotlineRaw}
                  onChange={(v) => updateField("contact.hotlineRaw", v)}
                />
                <InputField
                  label="Email"
                  value={siteData.contact.email}
                  onChange={(v) => updateField("contact.email", v)}
                />
                <InputField
                  label="Địa chỉ"
                  value={siteData.contact.address}
                  onChange={(v) => updateField("contact.address", v)}
                  className="md:col-span-2"
                />
                <InputField
                  label="Địa chỉ sân tập"
                  value={siteData.contact.trainingAddress}
                  onChange={(v) => updateField("contact.trainingAddress", v)}
                  className="md:col-span-2"
                />
                <InputField
                  label="Giờ làm việc"
                  value={siteData.contact.workingHours}
                  onChange={(v) => updateField("contact.workingHours", v)}
                />
                <InputField
                  label="Facebook URL"
                  value={siteData.contact.facebookUrl}
                  onChange={(v) => updateField("contact.facebookUrl", v)}
                />
                <InputField
                  label="TikTok URL"
                  value={siteData.contact.tiktokUrl}
                  onChange={(v) => updateField("contact.tiktokUrl", v)}
                />
              </div>
            </div>
          )}

          {/* Hero Tab */}
          {activeTab === "hero" && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-4">
                Thông tin trang chủ
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Tên giáo viên"
                  value={siteData.teacherName}
                  onChange={(v) => updateField("teacherName", v)}
                />
                <InputField
                  label="Tên trung tâm"
                  value={siteData.centerName}
                  onChange={(v) => updateField("centerName", v)}
                />
                <InputField
                  label="Slogan"
                  value={siteData.brandSlogan}
                  onChange={(v) => updateField("brandSlogan", v)}
                  className="md:col-span-2"
                />
                <InputField
                  label="Tagline"
                  value={siteData.hero.tagline}
                  onChange={(v) => updateField("hero.tagline", v)}
                  className="md:col-span-2"
                />
                <InputField
                  label="Tiêu đề chính"
                  value={siteData.hero.titleMain}
                  onChange={(v) => updateField("hero.titleMain", v)}
                />
                <InputField
                  label="Highlight 1"
                  value={siteData.hero.titleHighlight1}
                  onChange={(v) => updateField("hero.titleHighlight1", v)}
                />
                <InputField
                  label="Highlight 2"
                  value={siteData.hero.titleHighlight2}
                  onChange={(v) => updateField("hero.titleHighlight2", v)}
                />
                <TextareaField
                  label="Mô tả"
                  value={siteData.hero.description}
                  onChange={(v) => updateField("hero.description", v)}
                  className="md:col-span-2"
                />
              </div>
            </div>
          )}

          {/* Stats Tab */}
          {activeTab === "stats" && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-4">
                Thống kê
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Số học viên"
                  type="number"
                  value={siteData.stats.students.toString()}
                  onChange={(v) =>
                    updateField("stats.students", parseInt(v) || 0)
                  }
                />
                <InputField
                  label="Tỷ lệ đậu (%)"
                  type="number"
                  value={siteData.stats.passRatePercent.toString()}
                  onChange={(v) =>
                    updateField("stats.passRatePercent", parseInt(v) || 0)
                  }
                />
                <InputField
                  label="Năm kinh nghiệm"
                  type="number"
                  value={siteData.stats.yearsExperience.toString()}
                  onChange={(v) =>
                    updateField("stats.yearsExperience", parseInt(v) || 0)
                  }
                />
                <InputField
                  label="Số xe"
                  type="number"
                  value={siteData.stats.vehicles.toString()}
                  onChange={(v) =>
                    updateField("stats.vehicles", parseInt(v) || 0)
                  }
                />
              </div>
            </div>
          )}

          {/* Pricing Tab */}
          {activeTab === "pricing" && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-4">
                Bảng giá các gói học
              </h2>
              {siteData.pricing.packages.map((pkg, index) => (
                <div key={pkg.code} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-blue-600">
                      {pkg.title}
                    </h3>
                    <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                      {pkg.code}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <InputField
                      label="Tiêu đề"
                      value={pkg.title}
                      onChange={(v) => {
                        const newPackages = [...siteData.pricing.packages];
                        newPackages[index].title = v;
                        updateField("pricing.packages", newPackages);
                      }}
                    />
                    <InputField
                      label="Giá (VNĐ)"
                      type="number"
                      value={pkg.priceVND.toString()}
                      onChange={(v) => {
                        const newPackages = [...siteData.pricing.packages];
                        newPackages[index].priceVND = parseInt(v) || 0;
                        updateField("pricing.packages", newPackages);
                      }}
                    />
                    <InputField
                      label="Giá gốc (VNĐ)"
                      type="number"
                      value={(pkg.originalPriceVND || 0).toString()}
                      onChange={(v) => {
                        const newPackages = [...siteData.pricing.packages];
                        newPackages[index].originalPriceVND = parseInt(v) || 0;
                        updateField("pricing.packages", newPackages);
                      }}
                    />
                  </div>
                  <TextareaField
                    label="Tagline"
                    value={pkg.tagline}
                    onChange={(v) => {
                      const newPackages = [...siteData.pricing.packages];
                      newPackages[index].tagline = v;
                      updateField("pricing.packages", newPackages);
                    }}
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tính năng (mỗi dòng 1 tính năng)
                    </label>
                    <textarea
                      value={pkg.features.join("\n")}
                      onChange={(e) => {
                        const newPackages = [...siteData.pricing.packages];
                        newPackages[index].features =
                          e.target.value.split("\n");
                        updateField("pricing.packages", newPackages);
                      }}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Promotions Tab */}
          {activeTab === "promotions" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800">Khuyến mãi</h2>
                <button
                  onClick={() => {
                    const newPromo = {
                      id: `promo-${Date.now()}`,
                      title: "Khuyến mãi mới",
                      description: "Mô tả khuyến mãi",
                      discountVND: 500000,
                      validUntil: "2026-12-31",
                      isActive: true,
                    };
                    updateField("promotions", [
                      ...siteData.promotions,
                      newPromo,
                    ]);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  + Thêm khuyến mãi
                </button>
              </div>
              {siteData.promotions.map((promo, index) => (
                <div key={promo.id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-green-600">{promo.title}</h3>
                    <button
                      onClick={() => {
                        const newPromos = siteData.promotions.filter(
                          (_, i) => i !== index,
                        );
                        updateField("promotions", newPromos);
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️ Xóa
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField
                      label="Tiêu đề"
                      value={promo.title}
                      onChange={(v) => {
                        const newPromos = [...siteData.promotions];
                        newPromos[index].title = v;
                        updateField("promotions", newPromos);
                      }}
                    />
                    <InputField
                      label="Giảm giá (VNĐ)"
                      type="number"
                      value={promo.discountVND.toString()}
                      onChange={(v) => {
                        const newPromos = [...siteData.promotions];
                        newPromos[index].discountVND = parseInt(v) || 0;
                        updateField("promotions", newPromos);
                      }}
                    />
                    <InputField
                      label="Hạn đến"
                      type="date"
                      value={promo.validUntil}
                      onChange={(v) => {
                        const newPromos = [...siteData.promotions];
                        newPromos[index].validUntil = v;
                        updateField("promotions", newPromos);
                      }}
                    />
                    <InputField
                      label="Mã code"
                      value={promo.code || ""}
                      onChange={(v) => {
                        const newPromos = [...siteData.promotions];
                        newPromos[index].code = v;
                        updateField("promotions", newPromos);
                      }}
                    />
                  </div>
                  <TextareaField
                    label="Mô tả"
                    value={promo.description}
                    onChange={(v) => {
                      const newPromos = [...siteData.promotions];
                      newPromos[index].description = v;
                      updateField("promotions", newPromos);
                    }}
                  />
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={promo.isActive}
                      onChange={(e) => {
                        const newPromos = [...siteData.promotions];
                        newPromos[index].isActive = e.target.checked;
                        updateField("promotions", newPromos);
                      }}
                      className="w-5 h-5 rounded"
                    />
                    <span className="text-gray-700">Đang kích hoạt</span>
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Đánh giá học viên
                </h2>
                <button
                  onClick={() => {
                    const newTestimonial = {
                      id: `${Date.now()}`,
                      name: "Học viên mới",
                      rating: 5,
                      content: "Nội dung đánh giá...",
                      licenseType: "B2",
                      date: new Date().toISOString().split("T")[0],
                    };
                    updateField("testimonials", [
                      ...siteData.testimonials,
                      newTestimonial,
                    ]);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  + Thêm đánh giá
                </button>
              </div>
              {siteData.testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="border rounded-lg p-4 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <button
                      onClick={() => {
                        const newTestimonials = siteData.testimonials.filter(
                          (_, i) => i !== index,
                        );
                        updateField("testimonials", newTestimonials);
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️ Xóa
                    </button>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <InputField
                      label="Tên"
                      value={testimonial.name}
                      onChange={(v) => {
                        const newTestimonials = [...siteData.testimonials];
                        newTestimonials[index].name = v;
                        updateField("testimonials", newTestimonials);
                      }}
                    />
                    <InputField
                      label="Loại bằng"
                      value={testimonial.licenseType}
                      onChange={(v) => {
                        const newTestimonials = [...siteData.testimonials];
                        newTestimonials[index].licenseType = v;
                        updateField("testimonials", newTestimonials);
                      }}
                    />
                    <InputField
                      label="Rating (1-5)"
                      type="number"
                      value={testimonial.rating.toString()}
                      onChange={(v) => {
                        const newTestimonials = [...siteData.testimonials];
                        newTestimonials[index].rating = Math.min(
                          5,
                          Math.max(1, parseInt(v) || 5),
                        );
                        updateField("testimonials", newTestimonials);
                      }}
                    />
                  </div>
                  <TextareaField
                    label="Nội dung đánh giá"
                    value={testimonial.content}
                    onChange={(v) => {
                      const newTestimonials = [...siteData.testimonials];
                      newTestimonials[index].content = v;
                      updateField("testimonials", newTestimonials);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Input Field Component
function InputField({
  label,
  value,
  onChange,
  type = "text",
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
      />
    </div>
  );
}

// Textarea Field Component
function TextareaField({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
      />
    </div>
  );
}
