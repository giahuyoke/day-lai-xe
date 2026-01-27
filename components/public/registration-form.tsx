"use client";

import React, { useState } from "react";
import { Phone, CheckCircle } from "lucide-react";

interface RegistrationFormProps {
  courseCode?: string;
  courseTitle?: string;
  phoneDisplay?: string;
  phoneRaw?: string;
  licenseOptions?: string[];
  compact?: boolean;
}

const RegistrationForm = ({
  courseCode,
  courseTitle,
  phoneDisplay = "0964.940.495",
  phoneRaw = "0964940495",
  licenseOptions = [
    "Bằng A1",
    "Bằng A",
    "Bằng B1",
    "Bằng B2",
    "Bằng C",
    "Bổ túc tay lái",
  ],
  compact = false,
}: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    license: courseCode || "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Đăng ký thành công! 🎉
        </h3>
        <p className="text-green-700 mb-4">
          Cảm ơn bạn đã đăng ký. Thầy Tùng sẽ liên hệ trong vòng 30 phút!
        </p>
        <a
          href={`tel:${phoneRaw}`}
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700"
        >
          <Phone size={18} />
          Hoặc gọi ngay: {phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-2xl ${compact ? "p-6" : "p-8"} shadow-xl`}
    >
      <h3
        className={`${compact ? "text-xl" : "text-2xl"} font-bold text-gray-900 mb-2`}
      >
        {courseTitle ? `Đăng ký ${courseTitle}` : "Đăng ký học lái xe"}
      </h3>
      <p className="text-red-500 font-medium mb-6 text-sm">
        🔥 Ưu đãi đặc biệt cho 20 học viên đầu tiên trong tháng!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Họ và tên *"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Số điện thoại *"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <select
            value={formData.license}
            onChange={(e) =>
              setFormData({ ...formData, license: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Chọn hạng bằng *</option>
            {licenseOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        {!compact && (
          <div>
            <textarea
              placeholder="Ghi chú (không bắt buộc)"
              rows={3}
              value={formData.note}
              onChange={(e) =>
                setFormData({ ...formData, note: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 rounded-lg transition-all"
        >
          ĐĂNG KÝ NGAY
        </button>
      </form>

      <div className="mt-4 pt-4 border-t border-gray-100 text-center">
        <p className="text-gray-500 text-sm mb-2">Hoặc liên hệ trực tiếp:</p>
        <a
          href={`tel:${phoneRaw}`}
          className="inline-flex items-center gap-2 text-yellow-600 font-bold text-lg hover:text-yellow-700"
        >
          <Phone size={20} />
          {phoneDisplay}
        </a>
      </div>
    </div>
  );
};

export default RegistrationForm;
