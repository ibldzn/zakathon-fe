import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TanyaMinify = () => {
  return (
    <div className="w-full h-full flex items-center flex-col gap-4 p-4 bg-[#EFFFF8]">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="text-left">
          <ArrowLeft size={48} />
        </Link>
        <span className="text-center uppercase text-3xl font-semibold">
          Tanya MINFY
        </span>
        <div />
      </div>
      <div className="w-full h-full flex justify-around">
        <div className="relative">
          <Image
            src="/hijab-notebook.png"
            alt="Notebook"
            width={150}
            height={300}
            className="z-10"
          />
          <Image
            src="/bookmark.png"
            alt="Bookmark"
            width={150}
            height={150}
            className="absolute top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default TanyaMinify;
