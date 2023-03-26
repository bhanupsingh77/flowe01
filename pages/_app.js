import { Analytics } from "@vercel/analytics/react";
import Header from "../src/components/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
