import { getSiteData } from "@/lib/api/services";
import LandingPageClient from "./landing-page-client";

/**
 * Server Component để fetch data SSR
 * Data được fetch trên server và pass xuống client component
 */
export default async function LandingPageServer() {
  const data = await getSiteData();

  return <LandingPageClient data={data} />;
}
