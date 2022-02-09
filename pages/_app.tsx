import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { WithThemes } from "components/WithThemes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <WithThemes>
        <Component {...pageProps} />
      </WithThemes>
    </ThemeProvider>
  );
}

export default MyApp;
