import "../styles/main.css";
import type { AppProps } from "next/app";
import * as React from "react";
import AOS from "aos";
import NextNProgress from "nextjs-progressbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
// import aos styles
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
      delay: 600,
    });
  }, []);
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
