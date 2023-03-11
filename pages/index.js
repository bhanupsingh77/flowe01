import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../src/components/header";
import ProductPromotion from "../src/components/productPromotion";
import ProductCarousel from "../src/components/productCarousel";
import BrandLocation from "../src/components/brandLocation";
import BrandCustomerReview from "../src/components/brandCustomerReview";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          L K Bombay - Defence Colony Delhi since 1990s, Florist near you
        </title>
        <meta
          name="description"
          content="Shop Now! Premium Luxury Flowers. Midnight Delivery, Same Day Delivery - Send Flowers to Delhi NCR from USA, Canada, UK, Australia & Worldwide. Hand Made With Love, Gorgeous Flower Bunch, Bouquet, Box Made With The Freshest Blooms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <ProductPromotion />
        <ProductCarousel productType={"Box"} displayNumber={18} />
        <ProductCarousel productType={"Basket"} displayNumber={8} />
        <ProductCarousel productType={"Bunch"} displayNumber={5} />
        {/* <ProductCarousel productType={"Vase"} displayNumber={3} /> */}
        <BrandCustomerReview displayNumber={3} />
        <BrandLocation />
      </main>
    </>
  );
}
