"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import cn from "clsx";

const ThemeChange = () => {
  const DEFAULT_BUTTON_WRAPPER =
    "right-4 bottom-4 rounded-4xl w-[48px] h-[48px] fixed hover:scale-120 transition-all cursor-pointer z-20";
  const DEFAULT_ICON_STYLE =
    "my-0 mx-auto trans absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !theme) {
      setTheme("light");
    }
  }, [mounted, theme, setTheme]);

  if (!mounted) return null;

  return (
    <>
      {theme !== "dark" ? (
        <div
          onClick={() => setTheme("dark")}
          className={cn(DEFAULT_BUTTON_WRAPPER, "bg-blue-950")}
        >
          <IoMoon size={24} color="yellow" className={DEFAULT_ICON_STYLE} />
        </div>
      ) : (
        <div
          onClick={() => setTheme("light")}
          className={cn(DEFAULT_BUTTON_WRAPPER, "bg-blue-400")}
        >
          <FaSun size={24} color="yellow" className={DEFAULT_ICON_STYLE} />
        </div>
      )}
    </>
  );
};

export default ThemeChange;
