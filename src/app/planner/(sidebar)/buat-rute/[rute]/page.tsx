"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "boxicons/css/boxicons.min.css";

const RutePage = () => {
  const route = useRouter();

  return (
    <div className="h-full px-6 -mt-[20px]">
      <button
        onClick={() => route.push("/planner/buat-rute")}
        className="bg-[#009EFF] text-white px-6 py-3 rounded-[8px] flex items-center gap-2 font-semibold mb-2"
      >
        <i className="bx bx-arrow-back text-lg"></i>
        Kembali
      </button>

      <div className="bg-gray-500 h-[350px] w-full">ini nanti map</div>

      <div className=" p-3 mt-2 flex w-full justify-between">
        <div className="flex flex-wrap items-center w-[40%] gap-6">
          <div className="flex items-center gap-2">
            <i className="bx bx-car text-5xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[#707070]">Jenis mobil</p>
              <p className="font-bold">SUV</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <i className="bx bx-credit-card-front text-5xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[#707070]">Plat Nomor</p>
              <p className="font-bold">B 1234 SUV</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <i className="bx bx-user text-5xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[#707070]">Supir </p>
              <p className="font-bold">Udin</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <i className="bx bx-map text-5xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[#707070]">Alamat Asal</p>
              <p className="font-bold">Cikarang</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <i className="bx bx-map-pin text-5xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[#707070]">Alamat Tujuan</p>
              <p className="font-bold">• Bekasi • Bogor </p>
            </div>
          </div>
        </div>

        <button className="bg-[#008EE6] h-fit self-center gap-2 flex items-center text-white font-semibold px-4 py-2 rounded-[8px]">
          <i className="bx bx-send text-lg "></i>
          Kirim
        </button>
      </div>
    </div>
  );
};

export default RutePage;
