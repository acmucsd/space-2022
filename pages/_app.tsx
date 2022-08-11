import "src/styles/globals.scss";
import "src/styles/reset.scss";

import Particle from "src/components/TsParticles";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Particle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
