import { Analytics } from "@vercel/analytics/react";
import Header from "../src/components/header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <!-- Hotjar Tracking Code for lkbombay --> */}
      <Head>
        <script
          id="hotjarAnalytics"
          dangerouslySetInnerHTML={{
            __html: `(function (h, o, t, j, a, r) {
            h.hj =
              h.hj ||
              function () {
                (h.hj.q = h.hj.q || []).push(arguments);
              };
            h._hjSettings = { hjid: 3819010, hjsv: 6 };
            a = o.getElementsByTagName("head")[0];
            r = o.createElement("script");
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(
            window,
            document,
            "https://static.hotjar.com/c/hotjar-",
            ".js?sv="
          );`,
          }}
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
