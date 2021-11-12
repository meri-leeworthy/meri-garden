import { useTheme } from "next-themes";
// import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const WithThemes = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeButton = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button
          className="mt-4 border p-2 border-gray-400 dark:border-white rounded-full text-xl"
          onClick={() => setTheme("light")}
        >
          <FiSun />
        </button>
      );
    } else {
      return (
        <button
          className="mt-4 border p-2 border-gray-400 dark:border-white rounded-full text-xl"
          onClick={() => setTheme("dark")}
        >
          <FiMoon />
        </button>
      );
    }
  };

  //children was wrapped in div with min-h-screen flex flex-col items-center justify-start xl:flex-row xl:max-h-screen

  return (
    <>
      {children}
      <div className="flex justify-center md:justify-end pb-4 px-4 md:fixed w-full bottom-0">
        {renderThemeButton()}
      </div>
    </>
  );
};
