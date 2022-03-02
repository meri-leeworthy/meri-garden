import { useTheme } from "next-themes";
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
        <button onClick={() => setTheme("light")}>
          <FiSun />
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("dark")}>
          <FiMoon />
        </button>
      );
    }
  };

  //children was wrapped in div with min-h-screen flex flex-col items-center justify-start xl:flex-row xl:max-h-screen

  return (
    <>
      <div className="theme-header">{renderThemeButton()}</div>
      {children}
    </>
  );
};
