import React from "react";

const Loading = () => {
  const tempArr = Array(8).fill("");
  return (
    <div className="animate-pulse space-y-4 flex-1">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tempArr.map((e, i) => {
          return (
            <li key={i} className="bg-[#4A4E4D] rounded-2xl px-4 py-6">
              <div className="w-full h-[240px] bg-[#767a79]"></div>
              <p className="text-[#dedede] text-xl w-[120px] h-[30px] block"></p>
              <p className="text-[#aeaeae] w-[80px] h-[30px]"></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Loading;
