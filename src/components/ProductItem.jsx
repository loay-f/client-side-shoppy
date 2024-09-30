import img from "../assets/452935320_18362818942096099_8667971395554653260_n.jpg";
import { Link } from "react-router-dom";
import ProductColorIcon from "./ProductColorIcon";
import { useState } from "react";
import Quickview from "./ProductQuickview";
import ProductQuickView from "./ProductQuickview";

const ProductItem = (props) => {
  const [selectedColor, setSelectedColor] = useState();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [displayedImage, setDisplayedImage] = useState(props.img);
  const product = {
    colors: ["red", "green", "blue"],
    images: [],
  };
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden group w-full aspect-[6/8]">
        <Link to={`/collections/${props.id}`}>
          <img
            src={displayedImage}
            alt="img"
            className="w-full min-h-full rounded-xl transition-all group-hover:scale-110"
          />
        </Link>
        <div className="absolute top-2 -right-10 flex flex-col gap-2 transition-all duration-300 group-hover:right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-9 h-9 p-2 bg-white rounded-full cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-9 h-9 p-2 bg-white rounded-full cursor-pointer"
            onClick={() => {
              setQuickViewOpen(true);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>

      <ProductQuickView open={quickViewOpen} setOpen={setQuickViewOpen} />

      <div className="text-left xs:text-center mt-4">
        <h5 className="font-semibold">{props.title}</h5>
        <p className="mt-2">
          <span className={props.sale && "text-red font-semibold"}>
            {props.price}$
          </span>
          {
            <span className="text-gray-500 line-through ml-2">
              {props.discountedPrice}$
            </span>
          }
        </p>
        <div className="flex flex-row gap-3 mt-3 xs:justify-center">
          {product.colors.map((color) => (
            <ProductColorIcon
              key={color}
              src={img}
              className={selectedColor === color && "border-2"}
              onClick={() => {
                setSelectedColor(color);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
