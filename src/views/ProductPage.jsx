import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TrendingProducts from "../components/TrendingProducts";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentColor, setCurrentColor] = useState(null);
  const { productId } = useParams();
  !loading ? (product.discount = 200) : console.log("");

  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [response, setResponse] = useState(null);
  const token = localStorage.getItem("authToken");

  const handleAddToCart = async () => {
    try {
      // Create the payload with product ID and quantity
      const payload = {
        productId: productId, // Provided from parent component or fetched dynamically
        quantity: quantity,
      };

      // Make the POST request to the backend API
      const response = await axios.post(
        "http://localhost:3000/add-to-cart",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
            "Content-Type": "application/json", // Specify content type
          },
        }
      );
      // Handle success response
      setResponse(response.data);
      console.log("Response:", response.data);
    } catch (error) {
      // Handle any errors (e.g., 500 errors, network issues)
      setError("Failed to add product to cart. Please try again.");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/product/${productId}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch {
        console.log(productId);
        setError("An error occurred while fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  console.log(product);
  if (loading) return <div>loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="w-[90%] mx-auto px-4 pt-16">
        <div className="flex flex-row gap-14 mb-20 sm:flex-col md:flex-col">
          <div className="w-1/2 mb-8 md:w-full md:mb-0 sm:w-full sm:mb-0">
            <img
              src={product.imageUrl}
              alt="Zip Tote Basket"
              className="w-full h-auto rounded-lg aspect-[1/1.1]"
            />
            <div className="flex justify-center gap-3 mt-4">
              {[1, 2, 3, 4].map((num) => (
                <img
                  key={num}
                  src={product.imageUrl}
                  alt={`Thumbnail ${num}`}
                  className="w-20 h-20 border border-gray-200 rounded cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-1/2 md:w-full sm:w-full md:pl-8">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-sm leading-6 text-gray-600 mb-6">
              {product.description}
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Availability:{" "}
              {product.stock ? `${product.stock} left` : "Out of stock"}
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Category: {product.category}
            </p>
            <div className="flex items-center h-fit gap-2 mb-4">
              <p className="text-xl line-through">
                LE {Math.floor(product.price)}
              </p>
              <p className="text-xl font-semibold text-red">
                LE {Math.floor(product.price - product.discount)}
              </p>
              <span className="text-xs text-white h-fit rounded-md bg-[#E95144] px-2 py-1 font-medium">
                save LE {product.discount}
              </span>
            </div>
            <div className="mb-6">
              <p className="font-semibold mb-2">
                Color: <span className="font-normal">{currentColor}</span>
              </p>
              <div className="flex space-x-2">
                {Object.entries(product.colors).map(([key, value], i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 cursor-pointer bg-[${value}] rounded-full border-2 border-blue-500`}
                    onClick={() => setCurrentColor(key)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <button
                className="w-full bg-main-dark-bg text-white py-3 rounded-md hover:bg-black transition duration-300"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>

              <button className="text-gray-700 hover:bg-gray-200 hover:text-black p-2 rounded transition-all duration-200">
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>

            {["Features", "Care", "Shipping", "Returns"].map((section) => (
              <div key={section} className="border-t border-gray-200 py-4">
                <button className="flex items-center justify-between w-full">
                  <span className="font-semibold">{section}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TrendingProducts title="Products you also may like" />
    </>
  );
};

export default ProductPage;
