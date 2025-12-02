import React from "react";
import { Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-12 pb-24 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Cột 1: Thông tin chung */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">
                Thầy Tùng - Trung tâm Trường An
              </h4>
              <p className="mb-4 text-sm">
                Trung tâm đào tạo lái xe uy tín hàng đầu. Cam kết chất lượng,
                tận tâm, hỗ trợ học viên trọn đời.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Cột 2: Liên hệ */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Liên Hệ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <MapPin size={18} /> Văn phòng: 123 Đường ABC, Quận 1, TP.HCM
                </li>
                <li className="flex gap-2">
                  <MapPin size={18} /> Sân tập: KDC Tên Lửa, Bình Tân
                </li>
                <li className="flex gap-2">
                  <Phone size={18} /> Hotline: 0909.123.456
                </li>
              </ul>
            </div>

            {/* Cột 3: Link nhanh */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Khóa Học</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Học lái xe B1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Học lái xe B2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Học lái xe Hạng C
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Bổ túc tay lái
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            © 2024 Thầy Tùng - Trung tâm Trường An. Thiết kế bởi Huy Gia.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Call Button (Chỉ hiện trên Mobile) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 md:hidden flex justify-between gap-2 z-50 shadow-lg">
        <a
          href="tel:0909123456"
          className="flex-1 bg-green-500 text-white rounded-lg py-3 font-bold text-center flex items-center justify-center gap-2 animate-pulse"
        >
          <Phone size={20} /> Gọi Ngay
        </a>
        <a
          href="https://zalo.me/0909123456"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-blue-600 text-white rounded-lg py-3 font-bold text-center flex items-center justify-center gap-2"
        >
          Chat Zalo
        </a>
      </div>
    </>
  );
};

export default Footer;
