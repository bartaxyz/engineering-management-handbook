import "@radix-ui/themes/styles.css";
import "@styles/globals.css";
import "@styles/theme-config.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";

import { Source_Sans_3 } from "next/font/google";
import { ReactElement, ReactNode } from "react";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-source-sans-3",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={sourceSans3.className}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
