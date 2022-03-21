import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import { useRouter } from "next/router";

export const WithThemes = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const renderThemeButton = () => {
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

  const renderNav = () => {
    switch (router.pathname) {
      case "/":
        return null;
      case "/projects":
        return (
          <>
            <Link href="/">
              <a>CV</a>
            </Link>
            /
            <Link href="/blog">
              <a>writing</a>
            </Link>
            /
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </>
        );
      case "/blog":
        return (
          <>
            <Link href="/">
              <a>CV</a>
            </Link>
            /
            <Link href="/projects">
              <a>projects</a>
            </Link>
            /
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </>
        );
      case "/contact":
        return (
          <>
            <Link href="/">
              <a>CV</a>
            </Link>
            /
            <Link href="/blog">
              <a>writing</a>
            </Link>
            /
            <Link href="/projects">
              <a>projects</a>
            </Link>
          </>
        );
    }
  };

  return (
    <>
      <Head>
        {currentTheme === "dark" ? (
          <meta name="theme-color" content="rgb(41 37 36 / 1)" />
        ) : (
          <meta name="theme-color" content="white" />
        )}
      </Head>
      <div className="theme-header">
        <nav>{renderNav()}</nav>
        {renderThemeButton()}
      </div>
      {children}
    </>
  );
};
