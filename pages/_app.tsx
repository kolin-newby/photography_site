import "../styles/globals.css";
import type { AppProps } from "next/app";
import { loadIcons } from "../config/icon-loader";
import FlukeProvider from "../components/fluke-provider";

loadIcons();

function App({ Component, pageProps }: AppProps) {
  return (
      <FlukeProvider>
        <Component {...pageProps} />
      </FlukeProvider>
  );
}

export default App;
