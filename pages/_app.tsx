import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import DarkModeContextProvider from "@/components/DarkModeContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <DarkModeContextProvider>
        <Component {...pageProps} />
      </DarkModeContextProvider>
    </ThemeProvider>
  );
}
