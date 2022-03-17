import type { AppProps } from "next/app";
import { render, RenderOptions } from "@testing-library/react";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
