"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, MapPin, Mail } from "lucide-react";

interface HeaderProps {
  phoneDisplay?: string;
  phoneRaw?: string;
  hotlineDisplay?: string;
  hotlineRaw?: string;
}

const Header = ({
  phoneDisplay = "0964.940.495",
  phoneRaw = "0964940495",
  hotlineDisplay = "1900.123.456",
  hotlineRaw = "1900123456",
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Xử lý hiệu ứng scroll header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Trang chủ", id: "hero" },
    { label: "Về Thầy Tùng", id: "about" },
    { label: "Khóa học", id: "courses" },
    { label: "Đăng ký", id: "contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-yellow-500" />
              Trương Thị Hoa, Quận 12, TP.HCM
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-yellow-500" />
              thaytunglaixin@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${hotlineRaw}`}
              className="flex items-center gap-2 text-yellow-500 font-medium hover:text-yellow-400"
            >
              <Phone size={14} />
              Hotline: {hotlineDisplay}
            </a>
            <span className="text-gray-500">|</span>
            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center gap-2 text-yellow-500 font-medium hover:text-yellow-400"
            >
              <Phone size={14} />
              Zalo/ĐT: {phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? "fixed top-0 bg-white shadow-lg py-3"
            : "relative bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="relative w-14 h-14">
              <Image
                src="/logo.png"
                alt="Logo Lái Xe Thầy Tùng"
                className="object-contain"
                fill
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Thầy Tùng</span>
              <span className="text-yellow-600 text-xs block">
                Trung Tâm Trường An
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className="font-medium hover:text-yellow-600 transition-colors text-gray-700 uppercase text-sm tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${phoneRaw}`}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg"
            >
              <Phone size={18} />
              Gọi ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t lg:hidden">
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-medium py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-800"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={`tel:${phoneRaw}`}
                className="bg-yellow-500 text-gray-900 py-3 rounded-lg font-bold text-center w-full flex items-center justify-center gap-2 mt-2"
              >
                <Phone size={18} /> Gọi: {phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
