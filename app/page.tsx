import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "./next-seo.config";
import "./globals.css";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
