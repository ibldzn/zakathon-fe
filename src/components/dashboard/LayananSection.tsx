import React from "react";
import LayananBaseButton from "../layanan/LayananBaseButton";
import ActivityHistory from "../icons/ActivityHistory";
import CashInHand from "../icons/CashInHand";
import Feedback from "../icons/Feedback";
import Sedekah from "../icons/Sedekah";
import Sheep from "../icons/Sheep";
import Statistics from "../icons/Statistics";
import House from "../icons/House";
import Crown from "../icons/Crown";
import Image from "next/image";

const LayananSection = () => {
  return (
    <div className="flex relative flex-col items-center justify-center gap-6 w-full">
      <Image
        src="/leaves-1.png"
        alt="Leaves"
        width={100}
        height={150}
        className="absolute top-10 left-0"
      />
      <Image
        src="/leaves-2.png"
        alt="Leaves"
        width={100}
        height={100}
        className="absolute top-60 left-0"
      />
      <Image
        src="/leaves-1.png"
        alt="Leaves"
        width={100}
        height={150}
        className="absolute top-10 right-0 scale-x-[-1]"
      />
      <Image
        src="/leaves-2.png"
        alt="Leaves"
        width={100}
        height={100}
        className="absolute top-60 right-0 scale-x-[-1]"
      />
      <h1 className="font-bold text-3xl">Layanan</h1>
      <div className="grid grid-cols-3 gap-4 place-items-center w-3/4">
        <LayananBaseButton
          icon={CashInHand}
          text="Bayar Zakat"
          link="/bayar-zakat"
        />
        <LayananBaseButton icon={Sedekah} text="Salurkan Kebaikan" />
        <LayananBaseButton icon={Sheep} text="Qurban Online" />
        <LayananBaseButton icon={ActivityHistory} text="Histori Transaksi" />
        <LayananBaseButton icon={House} text="Ruang Edukasi" />
        <LayananBaseButton icon={Crown} text="Pencapaian" link="/pencapaian" />
        <LayananBaseButton icon={Statistics} text="Statistik" />
        <LayananBaseButton icon={Sedekah} text="Ibadah" />
        <LayananBaseButton icon={Feedback} text="Feedback" />
      </div>
    </div>
  );
};

export default LayananSection;
