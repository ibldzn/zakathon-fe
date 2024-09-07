import Image from "next/image";
import React from "react";

const SubscriptionFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-[#A0DDFF] w-full h-auto p-8 flex justify-between items-center">
      <Image
        src="/young-man-with-tablet.png"
        alt="Illustration"
        width={125}
        height={175}
      />
      <div className="flex flex-col gap-2 w-1/2 h-full items-center justify-center">
        <span className="text-center">
          Dapatkan Update Berita dan Informasi Penyaluran Zakat, Infaq/Sedekah,
          dan Program Amalyfe Lainnya.
        </span>
        <input
          type="email"
          placeholder="Ketik email disini"
          className="rounded-full px-4 py-4 w-full"
        />
        <button className="bg-[#0F84A7] hover:bg-[#0f84a7de] rounded-full px-12 py-4 text-white font-semibold shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.6)]">
          Daftar
        </button>
        <span className="text-xs text-gray-500 place-self-end">
          Beramal Jadi Lebih Mudah! Download aplikasi kami untuk zakat, sedekah,
          dan donasi dengan cepat. Mulai berbagi kebaikan hanya dengan satu
          klik! Download Sekarang di atau{" "}
        </span>
      </div>
      <Image src="/hijab.png" alt="Illustration" width={100} height={100} />
    </footer>
  );
};

export default SubscriptionFooter;
