import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <div className="flex pl-14 pt-14 flex-col gap-4">
      <h4 className="text-sm font-semibold">Assalamualaikum, selamat datang</h4>
      <h2 className="text-2xl font-extrabold">
        Tunaikan zakat dengan mudah bersama Ztion
      </h2>
      <h4>
        &quot;Keberkahan hidup dimulai dari kepedulian. Bayarkan zakat, tebarkan
        rahmat.&quot;
      </h4>
      <Link
        href="/bayar-zakat"
        className="px-4 py-2 bg-[#ECF8D7] font-bold flex gap-2 max-w-fit items-center rounded-lg"
      >
        <span>Zakat Sekarang</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default HeaderSection;
