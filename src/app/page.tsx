import HeaderSection from "@/components/dashboard/HeaderSection";
import JaringanSection from "@/components/dashboard/JaringanSection";
import LatestNewsSection from "@/components/dashboard/LatestNewsSection";
import LayananSection from "@/components/dashboard/LayananSection";
import WhyAmalyfeSection from "@/components/dashboard/WhyAmalyfeSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <HeaderSection />
      <JaringanSection />
      <LayananSection />
      <WhyAmalyfeSection />
      <LatestNewsSection />
    </main>
  );
}
