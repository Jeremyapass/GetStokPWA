import React from "react";

const DetailRutePage = () => {
  return (
    <div className="px-6  flex flex-col gap-3 h-full">
      <button className="bg-[#009EFF] text-white px-6 py-3 h-fit rounded-[8px] flex items-center gap-2 font-semibold mb-2">
        <i className="bx bx-arrow-back"></i>
        Detail riwayat rute
      </button>

      <div className="border border-[#F1F1F1] rounded-[8px] bg-white p-4 flex flex-col gap-2">
        <div className="flex flex-wrap gap-2  ">
          <div className="flex-1 flex items-center gap-2 left-0">
            <i className="bx bx-car text-2xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-semibold text-[#707070]">Jenis Mobil</p>
              <p className="font-bold">SUV</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-2 left-0">
            <i className="bx bx-credit-card-front text-2xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[#707070]">Plat Nomor</p>
              <p className="font-bold">B 1234 SUV</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2  ">
          <div className="flex-1 flex items-center gap-2 left-0">
            <i className="bx bx-user text-2xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-semibold text-[#707070]">Nama Supir</p>
              <p className="font-bold">Udin</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-2 left-0">
            <i className="bx bx-map text-2xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[#707070]">Alamat Asal</p>
              <p className="font-bold">Cikarang</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2  ">
          <div className="flex-1 flex items-center gap-2 left-0">
            <i className="bx bx-map-pin text-2xl text-[#009EFF]"></i>
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-semibold text-[#707070]">Alamat Tujuan</p>
              <p className="font-bold">• Bekasi • Bogor </p>
            </div>
          </div>
        </div>

        <div className="h-full mt-2">nanti di sini map</div>
      </div>
    </div>
  );
};

export default DetailRutePage;
