import HeaderSection from "@/components/dashboard/HeaderSection";
import JaringanSection from "@/components/dashboard/JaringanSection";
import LatestNewsSection from "@/components/dashboard/LatestNewsSection";
import LayananSection from "@/components/dashboard/LayananSection";
import WhyAmalyfeSection from "@/components/dashboard/WhyAmalyfeSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 relative">
      <HeaderSection />
      <JaringanSection />
      <LayananSection />
      <WhyAmalyfeSection />
      <LatestNewsSection />
      <Image
        src="/tanya-minfy.png"
        alt="Tanya Minfy"
        width={120}
        height={120}
        className="rounded-full bg-[#e1f5ef] sticky right-20 bottom-10 ml-auto"
      />
    </main>
  );
}
