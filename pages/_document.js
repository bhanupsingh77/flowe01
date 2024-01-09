import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Hotjar Tracking Code for lkbombay --> */}
        <Script
          id="hotjar analytics"
          strategy="afterInteractive"
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
            )`,
          }}
        />
      </Head>
      <body style={{ margin: "0px" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
