import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import sliderImg1 from "../assets/9752739.jpg";
import sliderImg2 from "../assets/fog.jpg";

const Hero = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider h-[1hv]">
      <div className="keen-slider__slide">
        <img src={sliderImg1} className=" w-full h-lvh" />
      </div>
      <div className="keen-slider__slide">
        <img src={sliderImg1} className=" w-full h-lvh" />
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
  );
};

export default Hero;
