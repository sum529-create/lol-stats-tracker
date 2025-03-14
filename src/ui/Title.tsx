import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-[var(--title-text-color)] text-3xl my-4 leading-8">
      {children}
    </h3>
  );
};

export default Title;
