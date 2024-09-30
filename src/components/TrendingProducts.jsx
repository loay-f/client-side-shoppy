import wrapper from "../HOC/Wrapper";
import { useKeenSlider } from "keen-slider/react";
import ProductItem from "./ProductItem";
import img from "../assets/shirt.jpg";

const TrendingProducts = (props) => {
  const [sliderRef, slider] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 30 },
      },
    },
    slides: { perView: 2, spacing: 20 },
  });

  return (
    <>
      <h2 className="text-2xl font-bold mb-10 xs:text-center">{props.title}</h2>

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <ProductItem
            title="Cotton Long-Sleeve Striped T-shirt"
            price="500"
            sale={true}
            discountedPrice={500}
            id="asd"
            img={img}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductItem
            title="Cotton Long-Sleeve Striped T-shirt"
            price="500"
            sale={true}
            discountedPrice={500}
            id="asd"
            img={img}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductItem
            title="Cotton Long-Sleeve Striped T-shirt"
            price="500"
            sale={true}
            discountedPrice={500}
            id="asd"
            img={img}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductItem
            title="Cotton Long-Sleeve Striped T-shirt"
            price="500"
            sale={true}
            discountedPrice={500}
            id="asd"
            img={img}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductItem
            title="Cotton Long-Sleeve Striped T-shirt"
            price="500"
            sale={true}
            discountedPrice={500}
            id="asd"
            img={img}
          />
        </div>
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 rounded-full p-3 bg-white"
          onClick={() => slider.current?.next()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 rounded-full p-3 bg-white"
          onClick={() => slider.current?.prev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default wrapper(TrendingProducts);
