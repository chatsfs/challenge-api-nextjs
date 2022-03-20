import Head from "@components/Head";
import Layout from "@components/Layout";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </>
  );
}
