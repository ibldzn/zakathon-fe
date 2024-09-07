"use client";

import DarkBlueCircle from "@/components/icons/DarkBlueCircle";
import LightBlueCircle from "@/components/icons/LightBlueCircle";
import { MAX_PROGRESS } from "@/constants";
import { useState } from "react";

const MISI = [
  {
    title: "Sedekah 1 kali",
    isDone: true,
  },
  {
    title: "Lengkapi Profile",
    isDone: true,
  },
  {
    title: "Sedekah 5 kali",
    isDone: false,
  },
  {
    title: "Ikut kontribusi kebaikan",
    isDone: false,
  },
];

export default function Pencapaian() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progress, _setProgress] = useState(3);

  return (
    <div className="w-full p-14 flex flex-col gap-4">
      <h4 className="font-semibold">Level</h4>
      <div className="flex gap-4 justify-around">
        {[1, 2, 3].map((level) => (
          <div
            key={level}
            className="rounded-full bg-yellow-300 p-8 w-16 h-16 flex justify-center items-center text-white text-4xl font-bold"
          >
            {level}
          </div>
        ))}
      </div>
      <div className="flex justify-around my-4">
        {Array.from(Array(progress).keys()).map((_, index) => (
          <LightBlueCircle key={index} />
        ))}
        {Array.from(Array(MAX_PROGRESS - progress).keys()).map((_, index) => (
          <DarkBlueCircle key={index} />
        ))}
      </div>

      <h4 className="font-semibold">Misi</h4>
      <div className="flex flex-col gap-4">
        {MISI.map((misi, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-full shadow-lg p-2"
          >
            <span>{misi.title}</span>
            <button
              className={`p-4 rounded-tr-xl rounded-bl-xl w-32 ${
                misi.isDone
                  ? "bg-white text-[#9AD9D4] border border-[#9AD9D4]"
                  : "bg-[#92D7E1] text-white"
              }`}
              disabled
            >
              {misi.isDone ? "Selesai" : "Lakukan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
