import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import styles from "../../styles/brandCustomerReview.module.css";
import { FaStar } from "react-icons/fa";

const BrandCustomerReview = ({ CustomersReviewData }) => {
  const displayCustomerReviewsImages = new Array(
    CustomersReviewData.length
  ).fill(1);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>Customer Review</div>
      <div className={styles.headingTwo}>
        Hear from our satisfied customers.
      </div>
      <div>
        <Carousel
          className={styles.carouselContainer}
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          //   autoPlaySpeed={1000}
          keyBoardControl={true}
          //   customTransition="all .8"
          //   transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //   deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {CustomersReviewData.map((reviewData, index) => {
            let star;
            if (index > 1) {
              star = (
                <div className={styles.starContainer}>
                  <FaStar className={styles.startColor} />
                  <FaStar className={styles.startColor} />
                  <FaStar className={styles.startColor} />
                  <FaStar className={styles.startColor} />
                  <FaStar />
                </div>
              );
            } else {
              star = (
                <div className={styles.starContainer}>
                  <FaStar className={styles.startColor} />
                  <FaStar className={styles.startColor} />
                  <FaStar className={styles.startColor} />
                  <FaStar className={styles.startColor} />
                  <FaStar className={styles.startColor} />
                </div>
              );
            }

            return (
              <div key={`${reviewData}${index}`}>
                {star}
                <div className={styles.reviewContent}>{reviewData.review}</div>
                <div className={styles.reviewImageContainer}>
                  <div>
                    <Image
                      className={styles.reviewerImage}
                      fill
                      alt={`customerPhoto`}
                      src={reviewData.customerPhoto}
                    />
                  </div>
                  <div>{reviewData.name}</div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className={styles.reviewButtonContainer}>
        <a
          className={styles.reviewButton}
          href="https://g.page/r/CRoxWYscYg_pEAI/review"
          target="_blank"
          rel="noopener noreferrer"
        >
          Write a review
        </a>
      </div>
    </div>
  );
};
export default BrandCustomerReview;
