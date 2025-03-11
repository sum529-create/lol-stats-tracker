import React from "react";

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </ul>
  );
};

export default CardWrapper;
