import React from "react";
import { Phone } from "lucide-react";

interface FooterProps {
  contact?: {
    phoneDisplay?: string;
    phoneRaw?: string;
    zaloPhone?: string;
    hotlineDisplay?: string;
    hotlineRaw?: string;
    address?: string;
    trainingAddress?: string;
    email?: string;
    workingHours?: string;
    facebookUrl?: string;
  };
}

const Footer = ({ contact }: FooterProps) => {
  const phoneRaw = contact?.phoneRaw || "0964940495";
  const zaloPhone = contact?.zaloPhone || "0964940495";
  const hotlineRaw = contact?.hotlineRaw || "1900123456";
  const facebookUrl =
    contact?.facebookUrl || "https://facebook.com/laixethaytung";

  return (
    <>
      <footer className="bg-gray-900 text-gray-400 pt-8 pb-24 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © 2024{" "}
              <span className="text-yellow-500 font-semibold">
                Lái Xe Thầy Tùng
              </span>{" "}
              - Dạy lái xe uy tín tại TP.HCM
            </p>
            <div className="flex items-center gap-4">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
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
                href={`https://zalo.me/${zaloPhone}`}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm font-bold"
                aria-label="Zalo"
              >
                Zalo
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:hidden z-50 shadow-lg safe-area-pb">
        <div className="grid grid-cols-4 divide-x divide-gray-200">
          <a
            href={`tel:${hotlineRaw}`}
            className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-yellow-600"
          >
            <Phone size={20} />
            <span className="text-xs mt-1">Hotline</span>
          </a>
          <a
            href={`tel:${phoneRaw}`}
            className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-yellow-600"
          >
            <Phone size={20} />
            <span className="text-xs mt-1">Gọi Thầy</span>
          </a>
          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-yellow-600"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.093.034.305.019.471z" />
            </svg>
            <span className="text-xs mt-1">Zalo</span>
          </a>
          <a
            href={`https://m.me/${facebookUrl.split("/").pop()}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-yellow-600"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.963 3.131 3.26 5.886-3.26-6.558 6.963z" />
            </svg>
            <span className="text-xs mt-1">Messenger</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
