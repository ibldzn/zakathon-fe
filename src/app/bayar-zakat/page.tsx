import { TIPE_ZAKAT } from "@/constants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BayarZakat = () => {
  return (
    <div className="w-full h-full flex items-center flex-col gap-4 bg-[#EFFFF8]">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="text-left">
          <ArrowLeft size={48} />
        </Link>
        <span className="text-center uppercase text-3xl">
          Bayar Zakat dengan Mudah, Transaparan, dan Penuh Berkah
        </span>
        <div />
      </div>
      <div className="w-full flex justify-center items-center p-4 capitalize gap-4">
        {TIPE_ZAKAT.map((tipe) => (
          <Link
            key={`/bayar-zakat/${tipe}`}
            href={`/bayar-zakat/${tipe.toLowerCase()}`}
            className="bg-white text-[#41A3B1] hover:bg-[#41A3B1] hover:text-white p-8 flex justify-center items-center text-3xl font-semibold rounded-xl"
          >
            Zakat {tipe}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BayarZakat;
