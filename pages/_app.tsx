import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
