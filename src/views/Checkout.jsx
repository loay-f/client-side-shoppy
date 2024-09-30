import axios from "axios";
import { useEffect, useState } from "react";

const Checkout = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        setError("An error occurred while fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [products, token]);

  const makeOrder = async (e) => {
    e.preventDefault();
    // Step 1: Gather form data
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData.entries());

    try {
      // Create the payload with product ID and quantity
      const payload = {
        shippingAddress: inputs,
      };

      // Make the POST request to the backend API
      const response = await axios.post(
        "http://localhost:3000/create-order",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
            "Content-Type": "application/json", // Specify content type
          },
        }
      );
      // Handle success response
      console.log("Response:", response.data);
    } catch (err) {
      // Handle any errors (e.g., 500 errors, network issues)
      setError("Failed to add product to cart. Please try again.");
      console.error("Error:", err);
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-[90%] mx-auto flex flex-row  p-6 gap-10 mt-10 min-h-screen md:flex-col-reverse sm:flex-col-reverse sm:w-full">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Contact information</h2>
        <form id="orderForm" onSubmit={makeOrder}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <h2 className="text-xl font-semibold mb-4 mt-8">Payment details</h2>
          <div className="mb-4">
            <label
              htmlFor="cardName"
              className="block text-sm font-medium text-gray-700"
            >
              Name on card
            </label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Card number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label
                htmlFor="expDate"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration date (MM/YY)
              </label>
              <input
                type="text"
                id="expDate"
                name="expDate"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="w-1/3">
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700"
              >
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 mt-8">Shipping address</h2>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="apartment"
              className="block text-sm font-medium text-gray-700"
            >
              Apartment, suite, etc.
            </label>
            <input
              type="text"
              id="apartment"
              name="apartment"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                Postal code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 mt-8">
            Billing information
          </h2>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="sameAsShipping"
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label
              htmlFor="sameAsShipping"
              className="ml-2 block text-sm text-gray-900"
            >
              Same as shipping information
            </label>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">
              You won't be charged until the next step.
            </p>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Order summary</h2>
        <div>
          <ul>
            {!loading &&
              products.map((product) => (
                <li key={product.Product} className="py-6 border-b">
                  <Product product={product} />
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-6 pt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$320.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$15.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Taxes</span>
            <span>$26.80</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total</span>
            <span>$361.80</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = ({ product }) => {
  return (
    <div className="flex py-6">
      <div className="flex-shrink-0">
        <img
          className="w-24 h-24 rounded-md object-cover"
          src={product.product.imageUrl}
          alt={product.product.title}
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{product.product.title}</h3>
          <p className="ml-4">
            ${(product.product.price * product.quantity).toFixed(2)}
          </p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.product.color}</p>
        <p className="mt-1 text-sm text-gray-500">
          {product.product.size ? product.product.size : ""}
        </p>
      </div>
    </div>
  );
};

export default Checkout;
