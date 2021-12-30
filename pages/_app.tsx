import "../styles/globals.css";
import type { AppProps } from "next/app";
import { loadIcons } from "../config/icon-loader";

loadIcons();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
