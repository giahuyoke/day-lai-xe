import React from "react";
import Header from "@/components/public/header";
import Footer from "@/components/public/Footer";
import { getContactInfo } from "@/lib/api/services";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default async function PublicLayout({ children }: PublicLayoutProps) {
  // Fetch contact info on server
  const contact = await getContactInfo();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      <Header phoneDisplay={contact.phoneDisplay} phoneRaw={contact.phoneRaw} />
      <main className="flex-grow">{children}</main>
      <Footer contact={contact} />
    </div>
  );
}
