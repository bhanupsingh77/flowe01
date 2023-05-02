import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import styles from "../../styles/productCarousel.module.css";
import ProductCard from "./productCard.js";

const ProductCarousel = ({ productCategory, productData }) => {
  // const displayBoxProductImages = new Array(displayNumber).fill(1);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div className={styles.text}>
        BestSeller Flower {`${productCategory}`}
      </div>
      <Carousel
        className={styles.container}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        //   autoPlaySpeed={1000}
        keyBoardControl={false}
        //   customTransition="all .8"
        //   transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={""}
        deviceType={""}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {productData.map(({ productCategory, name, price, image, info }, i) => {
          if (i + 1 >= 10) {
            return (
              <div className={styles.imageContainer} key={`key${name}${i}`}>
                <ProductCard
                  product={{ productCategory, name, price, image, info }}
                />
                {/* <Image
                  className={styles.productImage}
                  fill
                  src={`/productImages/flower${productType}0${i + 1}.jpeg`} // Route of the image file
                  // height={420} // Desired size with correct aspect ratio
                  // width={330} // Desired size with correct aspect ratio
                  alt={`flower${productType}0${i + 1}`}
                /> */}
              </div>
            );
          } else {
            return (
              <div className={styles.imageContainer} key={`key${i}`}>
                <ProductCard
                  product={{ productCategory, name, price, image, info }}
                />
                {/* <Image
                  className={styles.productImage}
                  fill
                  src={`/productImages/flower${productType}00${i + 1}.jpeg`} // Route of the image file
                  // height={420} // Desired size with correct aspect ratio
                  // width={330} // Desired size with correct aspect ratio
                  alt={`flower${productType}00${i + 1}`}
                /> */}
              </div>
            );
          }
        })}
      </Carousel>
    </div>
  );
};
export default ProductCarousel;
