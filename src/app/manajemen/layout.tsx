"use client";

import Image from "next/image";
import React, { ReactNode, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import { usePathname, useRouter } from "next/navigation";
import type ApexCharts from "apexcharts"; // ✅ Import type ApexCharts

interface LayoutManajemenProps {
  children: ReactNode;
}

const sidebar = new Array(16).fill({ plat: "B 1234 SUV" });

const aktivitas = [
  { day: "Today" },
  { day: "Monday", date: "12/12/2023" },
  { day: "Tuesday", date: "12/12/2023" },
  { day: "Wednesday", date: "12/12/2023" },
  { day: "Thursday", date: "12/12/2023" },
  { day: "Friday", date: "12/12/2023" },
  { day: "Saturday", date: "12/12/2023" },
  { day: "Sunday", date: "12/12/2023" },
];

const LayoutManajemen: React.FC<LayoutManajemenProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<number | null>(null);
  const route = useRouter();
  const curretnPath = usePathname();

  const chartRef = React.useRef<ApexCharts | null>(null); // ✅ Revisi type

  useEffect(() => {
    if (isOpen === null) return;

    const chartElement = document.querySelector("#sales-chart");
    if (!chartElement) return;

    const initChart = async () => {
      const ApexChartsLib = await import("apexcharts");

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const options = {
        chart: {
          type: "line",
          height: 200,
        },
        series: [
          {
            name: "Penjualan",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
          },
        ],
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mei",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
          ],
        },
        colors: ["#009EFF"],
        stroke: {
          curve: "smooth",
        },
      };

      chartRef.current = new ApexChartsLib.default(chartElement, options);
      chartRef.current.render();
    };

    initChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [isOpen]);

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <div className="flex flex-col gap-4 bg-white w-[272px] px-[30px] py-[48px] items-center h-screen">
        <Image src={"/image/logo.png"} alt="Logo" width={94} height={94} />
        <label className="relative w-full flex">
          <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[#009EFF] text-xl"></i>
          <input
            type="text"
            placeholder="Cari kuitansi"
            className="h-[48px] border-[1px] border-[#F1F1F1] rounded-[8px] px-10 py-4 w-full"
          />
        </label>

        <div className="overflow-y-auto flex flex-col gap-6 h-full w-full ">
          {sidebar.map((item, index) => (
            <button
              onClick={() => curretnPath === "/manajemen/dashboard" && setIsOpen(isOpen === index ? null : index)}
              key={index}
              className={`flex w-full items-center gap-2 cursor-pointer text-[#707070] rounded-md px-2 ${
                isOpen === index ? "bg-[#E6F5FF] border border-[#009EFF]" : ""
              }`}
            >
              <i className="bx bx-car rounded-full bg-[#009EFF] text-white text-xl p-[9px] flex items-center justify-center"></i>
              <div className="flex flex-col items-center w-full font-semibold text-[#ADADAD] overflow-y-auto">
                Plat Nomor <p className="text-black font-medium">{item.plat}</p>
              </div>
            </button>
          ))}
        </div>

        <button onClick={()=>route.push('/login')} className="flex justify-center text-[#484848] items-center py-3 px-4 w-full gap-3">
          <i className="bx bx-log-out text-2xl font-semibold"></i>
          Log out
        </button>
      </div>

      {/* Main Content */}
      <div className="relative w-full z-50">
        <div className="w-full absolute top-[48px] px-[32px] flex justify-between items-center">
          <div className="py-[18px] px-[34px] bg-white shadow-md rounded-[8px] flex gap-[60px] text-lg">
            <div className="flex gap-2 items-center font-semibold">
              <i className="bx bx-laptop"></i>
              Dashboard
            </div>
            <button
              onClick={() => {
                setIsOpen(null);
                route.push("/manajemen/daftarUser");
              }}
              className="flex gap-2 items-center bg-[#009EFF] text-white py-3 px-6 font-medium rounded-[8px]"
            >
              <i className="bx bx-notepad"></i>
              Daftar user
            </button>
          </div>
          <div className="flex gap-2">
            <div className="flex rounded-[100px] bg-[#009EFF] items-center h-[50px] w-[212px] text-[#F1F1F1] p-1 gap-2">
              <Image src={"/image/UserImage.png"} alt="Logo" width={42} height={42} />
              Management
              <i className="bx bx-caret-down"></i>
            </div>
          </div>
        </div>

        {isOpen !== null && (
          <div className="absolute bottom-0 flex w-[95%] px-[32px] gap-6">
            <div className="w-full bg-white shadow-md py-3 rounded-lg self-end ">
              <div className="px-4 flex justify-between mb-2">
                <div className="flex gap-2">
                  <button className="p-2 bg-[#009EFF] text-white  rounded-[8px] flex gap-2 items-center">
                    <i className="bx bx-radar text-2xl"></i>
                    Sensor
                  </button>
                  <button className="p-2 text-[#009EFF] border-[#009EFF] border  rounded-[8px] flex gap-2 items-center">
                    <i className="bx bx-data text-2xl"></i>
                    Data
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center flex-col">
                    <p className="font-semibold">96.695</p>
                    <p className="text-[#707070] ">Kilometer</p>
                  </div>
                  <div className="flex  justify-center items-center flex-col">
                    <p className="font-semibold"> 03:57:34</p>
                    <p className="text-[#707070] ">Driving</p>
                  </div>
                  <div className="flex  justify-center items-center flex-col">
                    <p className="font-semibold"> 01:02:09</p>
                    <p className="text-[#707070] ">Idling</p>
                  </div>
                </div>
              </div>
              <div id="sales-chart" className="w-full "></div>
            </div>

            <div className="relative h-[550px] w-[350px] flex flex-col shadow-md rounded-[8px] bg-white p-4 gap-2">
              <button
                onClick={() => setIsOpen(null)}
                className="bx bx-x text-2xl self-end"
              ></button>
              <div className="flex gap-2 text-[#009EFF] items-center font-semibold">
                <i className="bx bx-receipt text-xl"></i>
                Status Terkini
              </div>
              <p className="text-[#707070]">Status akan diperbarui secara berkala</p>
              <div className="flex w-full items-center gap-1 cursor-pointer text-[#707070] rounded-md bg-[#E6F5FF] border-[1px] border-[#009EFF] px-3 py-1">
                <i className="bx bx-car rounded-full bg-[#009EFF] text-white text-xl p-[9px] flex items-center justify-center"></i>
                <div className="flex flex-col items-center w-full font-semibold text-[#ADADAD] overflow-y-auto">
                  Plat Nomor <p className="text-black font-medium">B 1234 SUV</p>
                </div>
              </div>
              Aktivitas
              <div className="flex flex-col gap-2 overflow-y-auto h-full text-xs">
                {aktivitas.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between items-center  border-[1px]  border-[#F1F1F1] p-3 rounded-md  gap-2"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="font-medium text-[#484848] flex gap-2 w-full">
                        {item.day}
                        {item.date && (
                          <span className="text-[#ADADAD] font-light">
                            {item.date}
                          </span>
                        )}
                      </div>
                      <Image
                        src={"/icons/MarkDarkYellow.svg"}
                        alt="Tanda seru"
                        width={18}
                        height={18}
                      />
                    </div>

                    <div className="w-full h-1 rounded-[8px] bg-gray-300 relative">
                      <div
                        className="h-full bg-blue-500 rounded-[8px]"
                        style={{ width: "45%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default LayoutManajemen;
