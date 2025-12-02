"use client";

import React, { useState, useEffect } from "react";
import { Phone, Car, Menu, X } from "lucide-react";
// import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Xử lý hiệu ứng scroll header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    { label: "Về chúng tôi", id: "about" },
    { label: "Khóa học", id: "courses" },
    { label: "Quy trình", id: "process" },
    { label: "Học phí", id: "pricing" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Car size={24} />
          </div>
          <span
            className={`text-xl font-bold ${
              scrolled ? "text-gray-900" : "text-blue-900"
            } md:text-blue-900`}
          >
            Thầy Tùng -{" "}
            <span className="text-blue-600">Trung tâm Trường An</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.id)}
              className="font-medium hover:text-blue-600 transition-colors text-gray-700"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Phone size={18} /> 0909.123.456
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t md:hidden animate-fade-in-down">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className="text-left font-medium py-2 border-b border-gray-100 text-gray-800"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white py-3 rounded-lg font-bold text-center w-full"
            >
              Đăng ký ngay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
