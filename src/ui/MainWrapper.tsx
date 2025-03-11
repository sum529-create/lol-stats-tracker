import React from "react";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1 self-start">{children}</div>;
};

export default MainWrapper;
