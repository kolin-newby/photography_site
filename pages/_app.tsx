import "../styles/globals.css";
import type { AppProps } from "next/app";
import { loadIcons } from "../config/icon-loader";

loadIcons();

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
