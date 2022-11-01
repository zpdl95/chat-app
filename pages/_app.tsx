import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect } from "react";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any, { shallow }: any) => {
      const encodeURL = decodeURI(url);
      console.log(
        `App is changing to ${encodeURL} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <RecoilRoot>
      <Head>
        <title>NextJS</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
