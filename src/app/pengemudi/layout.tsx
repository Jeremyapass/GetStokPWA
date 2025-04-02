
import React from "react";

const LayoutPengemudi = ({ children }: { children: React.ReactNode }) => {
  const sidebar = [
    {
      icon: "bx-map-alt",
      name: "Rute ",
    },
    {
      icon: "bx-receipt",
      name: "Kuitansi ",
    },
    {
      icon: "bx-log-out",
      name: "Keluar ",
    },
  ];

  return (
    <div className="flex flex-col sm:bg-green-500 h-screen w-full">
      {/* <div className=" flex flex-col h-screen w-[272px] bg-[#009EFF] p-[42px] items-center">
        <Image src={"/image/logo.png"} alt="logo" width={139} height={139} className="mb-[48px] bg-white p-2 rounded-md"/>
        <div className="flex flex-col gap-4 w-full">
          {sidebar.map((item, index) => (
            <div key={index} className="flex items-center gap-2 bg-white cursor-pointer hover:bg-white/10 px-6 py-4 text-[#707070] rounded-md">
              <i className={`bx ${item.icon} text-2xl`}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div> */}
      {children}

      <div className="flex w-full mt-auto bg-[#009EFF] justify-center gap-8 h-[68px]">
        {sidebar.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:bg-white/10 px-6 py-4 text-white"
          >
            <i className={`bx ${item.icon} text-2xl`}></i>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutPengemudi;
