import Head from "next/head";
import { Inter } from "@next/font/google";
import ProductPromotion from "../src/components/productPromotion";
import NotificationBar from "../src/components/notificationBar";
import ProductCarousel from "../src/components/productCarousel";
import BrandLocation from "../src/components/brandLocation";
import BrandCustomerReview from "../src/components/brandCustomerReview";
import SocialMedia from "../src/components/socialMedia";
import boxFlowerData from "../productData/boxFlowerData.js";
import basketFlowerData from "../productData/basketFlowerData.js";
import bouquetFlowerData from "../productData/bouquetFlowerData.js";
import CustomersReviewData from "../productReview/customersReviewData.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>
          L K Bombay - Defence Colony Delhi since 1993, Florist near you
        </title>
        <meta
          name="description"
          content="Shop Now! Premium Luxury Flowers. Midnight Delivery, Same Day Delivery - Send Flowers to Delhi NCR from USA, Canada, UK, Australia & Worldwide. Hand Made With Love, Gorgeous Flower Bunch, Bouquet, Box Made With The Freshest Blooms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main>
        <NotificationBar />
        <ProductPromotion />
        <ProductCarousel
          productData={bouquetFlowerData}
          productCategory={"Bouquet"}
        />
        <ProductCarousel productData={boxFlowerData} productCategory={"Box"} />
        <ProductCarousel
          productData={basketFlowerData}
          productCategory={"Basket"}
        />
        <BrandCustomerReview CustomersReviewData={CustomersReviewData} />
        <BrandLocation />
        <SocialMedia />
      </main>
    </>
  );
}
