import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-[#dedede] text-3xl my-4">{children}</h3>;
};

export default Title;
