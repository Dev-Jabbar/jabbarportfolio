import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "@/components/ContextProvider"; // Update the path to your context file

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
