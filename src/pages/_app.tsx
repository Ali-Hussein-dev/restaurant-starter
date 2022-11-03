import * as React from "react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "../styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#ffb366"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
