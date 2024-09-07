"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BESARAN_ZAKAT } from "@/constants";
import { formatCurrency } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const BayarZakatFidyah = () => {
  const [jumlahHari, setJumlahHari] = useState(0);

  return (
    <div className="w-full h-full flex items-center flex-col gap-4 p-4 bg-[#EFFFF8]">
      <div className="w-full flex justify-between items-center">
        <Link href="/bayar-zakat" className="text-left">
          <ArrowLeft size={48} />
        </Link>
        <span className="text-center uppercase text-3xl font-semibold">
          Masukkan Data Zakat Fidyah
        </span>
        <div />
      </div>
      <div className="flex flex-col items-center justify-center w-3/4 border border-[#74C0B9] text-xl">
        <h3 className="bg-[#74C0B9] text-center w-full p-2 text-white">
          Besaran Fidyah Per Hari
        </h3>
        <h3 className="text-[#0F84A7] text-center p-2 font-semibold">
          {formatCurrency(BESARAN_ZAKAT.FIDYAH)}
        </h3>
      </div>
      <div className="flex justify-around w-3/4 gap-8">
        <div className="flex flex-col w-1/2 gap-2">
          <Label htmlFor="jumlah-hari" className="text-lg">
            Jumlah Hari
          </Label>
          <Input
            id="jumlah-hari"
            placeholder="Masukkan jumlah hari"
            type="number"
            className="border border-[#0F84A7] p-6"
            onChange={(e) => {
              const value = parseInt(e.target.value) || 0;
              setJumlahHari(value);
            }}
          />
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <Label htmlFor="email" className="text-lg">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Masukkan alamat email"
            type="email"
            className="border border-[#0F84A7] p-6"
          />

          <Label htmlFor="nomor-handphone" className="text-lg">
            Nomor Handphone
          </Label>
          <Input
            id="nomor-handphone"
            placeholder="Masukkan nomor handphone"
            className="border border-[#0F84A7] p-6"
          />

          <Label htmlFor="total-zakat" className="text-lg">
            Total Zakat yang harus dibayarkan :
          </Label>
          <div className="flex justify-center items-center gap-2">
            <Input
              id="total-zakat"
              className="border border-[#0F84A7] p-6"
              value={formatCurrency(jumlahHari * BESARAN_ZAKAT.FIDYAH)}
              readOnly
            />
            <button className="bg-blue-500 rounded-lg text-sm h-full text-white">
              Lanjutkan Pembayaran
            </button>
          </div>

          <div className="flex gap-2 items-center mt-2">
            <Input id="doa-zakat" type="checkbox" className="w-4 h-4" />
            <Label htmlFor="doa-zakat" className="text-gray-400 italic">
              Saya telah membaca doa niat membayar zakat
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayarZakatFidyah;
