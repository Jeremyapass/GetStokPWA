"use client";
import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import Image from "next/image";

const daftarUser = [
  {
    nama: "Hallo",
    email: "Hallo@gmail.com",
    status: "Active",
    role: "Planner",
  },
  {
    nama: "Hallo",
    email: "Hallo@gmail.com",
    status: "Active",
    role: "Planner",
  },
  {
    nama: "Hallo",
    email: "Hallo@gmail.com",
    status: "Active",
    role: "Planner",
  },
  {
    nama: "Hallo",
    email: "Hallo@gmail.com",
    status: "Active",
    role: "Planner",
  },
  {
    nama: "Hallo",
    email: "Hallo@gmail.com",
    status: "Active",
    role: "Planner",
  },
  {
    nama: "Hallo",
    email: "Hallo@gmail.com",
    status: "Active",
    role: "Planner",
  },
  {
    nama: "Hallo",
    email: "Hallo@gmail.com",
    status: "Active",
    role: "Planner",
  },
  {
    nama: "Hallo",
    email: "Hallo@gmail.com",
    status: "Active",
    role: "Planner",
  },
];

const RiwayatRutePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Active");
  const [role, setRole] = useState("Planner");

  return (
    <div className="h-full px-8">
      <div className="bg-white w-full justify-between flex items-center">
        <label className="relative px-6 py-3 rounded-[8px] border-[1px] border-[#F1F1F1] flex items-center gap-2">
          <i className="bx bx-search text-2xl text-[#009EFF]"></i>
          <input type="text" className="" placeholder="Cari Supir" />
        </label>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#009EFF] flex gap-2 text-white px-6 py-2.5 rounded-[8px] font-bold"
        >
          <i className="bx bx-user-plus text-2xl"></i>
          Tambah Role User
        </button>
      </div>

      <div className="w-full mt-6 flex flex-col gap-2 h-[450px] overflow-y-auto">
        {daftarUser.map((user, index) => (
          <div
            key={index}
            className="px-5 py-2 flex gap-5 bg-[#E6F5FF] rounded-[8px]"
          >
            <i className="bx bx-user-plus text-xl text-white rounded-full bg-[#009EFF] p-2 m-auto"></i>
            <div className="flex justify-between w-full text-sm items-center">
              <div className="flex flex-col items-center">
                No
                <p className="text-[#707070]">{index + 1}</p>
              </div>
              <div className="flex flex-col font-semibold items-center">
                Nama
                <p className="text-[#707070]">{user.nama}</p>
              </div>
              <div className="flex flex-col font-semibold items-center">
                Email
                <p className="text-[#707070]">{user.email}</p>
              </div>
              <div className="flex flex-col font-semibold items-center">
                Status
                <p className="text-[#707070]">{user.status}</p>
              </div>
              <div className="flex flex-col font-semibold items-center">
                Role
                <p className="text-[#707070]">{user.role}</p>
              </div>
            </div>

            <button className="px-3 py-1 rounded-[8px] text-sm flex justify-center items-center w-[145px] bg-[#008EE6] text-white font-semibold ml-6">
              Edit Pengguna
            </button>
          </div>
        ))}
      </div>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 backdrop-blur-xs z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal */}
          <div
            className="bg-white w-[354px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[8px] gap-6 flex flex-col items-center p-[24px] z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2 items-center">
              <Image
                src={"/image/logo.png"}
                alt="Logo"
                width={134}
                height={134}
              />
              <p className="text-2xl font-semibold text-[#009EFF]">
                Tambah User Baru
              </p>
              <p className="text-sm text-[#707070]">Selamat datang kembali</p>
            </div>

            {/* Nama */}
            <div className="flex flex-col gap-1 w-full text-[#545454] font-semibold">
              <div className="flex gap-1 text-sm items-center">
                <i className="bx bx-user text-2xl"></i>
                <p>Nama</p>
              </div>
              <input
                type="text"
                placeholder="Input nama"
                className="text-sm px-6 py-3 border-[2px] border-[#F1F1F1] rounded-[8px]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 w-full text-[#545454] font-semibold">
              <div className="flex gap-1 text-sm items-center">
                <i className="bx bx-mail-send text-2xl"></i>
                <p>Email</p>
              </div>
              <input
                type="text"
                placeholder="Input email"
                className="text-sm px-6 py-3 border-[2px] border-[#F1F1F1] rounded-[8px]"
              />
            </div>

            {/* Status Dropdown */}
            <div className="flex flex-col gap-1 w-full text-[#545454] font-semibold">
              <div className="flex gap-1 text-sm items-center">
                <i className="bx bx-user-pin text-2xl"></i>
                <p>Status</p>
              </div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="text-sm px-6 py-3 border-[2px] border-[#F1F1F1] rounded-[8px]"
              >
                <option value="Active">Active</option>
                <option value="Unactive">Unactive</option>
              </select>
            </div>

            {/* Role Dropdown */}
            <div className="flex flex-col gap-1 w-full text-[#545454] font-semibold">
              <div className="flex gap-1 text-sm items-center">
                <i className="bx bx-user-circle text-2xl"></i>
                <p>Role</p>
              </div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="text-sm px-6 py-3 border-[2px] border-[#F1F1F1] rounded-[8px]"
              >
                <option value="Driver">Driver</option>
                <option value="Planner">Planner</option>
                <option value="Management">Management</option>
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RiwayatRutePage;
