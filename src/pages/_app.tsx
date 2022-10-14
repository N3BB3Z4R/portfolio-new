import "src/styles/globals.css";
import 'src/components/Header/Header.css'
import 'src/components/Footer/Footer.css'
import 'src/components/WelcomeBlock/WelcomeBlock.css'
import 'src/components/SocialsBlock/SocialsBlock.css'

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
