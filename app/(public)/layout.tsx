import React from "react";
import Header from "@/components/public/header";
import Footer from "@/components/public/Footer";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
