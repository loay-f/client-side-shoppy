import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import { Link } from "react-router-dom";

// Product Component
const Product = ({ product, quantity, onQuantityChange, removeFromCart }) => {
  console.log(product);
  return (
    <div className="flex py-6">
      <div className="flex-shrink-0">
        <img
          className="w-24 h-24 rounded-md object-cover"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{product.title}</h3>
            <p className="ml-4">${(product.price * quantity).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {/* {product.color} {product.size ? `- ${product.size}` : ""} */}
          </p>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <div className="flex items-center">
            <p className="mr-3 text-gray-500">Qty:</p>
            <select
              value={quantity}
              onChange={(e) =>
                onQuantityChange(product.id, parseInt(e.target.value))
              }
              className="rounded-md border border-gray-300 text-gray-700"
            >
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => {
                removeFromCart(product._id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart Component
const Cart = () => {
  const [cart, setCart] = useState(null);
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
        setCart(response.data.products);
      } catch (err) {
        if (err.response.status === 404) {
          console.clear();
          setError(`Your cart is Empty`);
          console.error("", err.response.status);
        } else {
          console.error(err.response.status);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  // Function to remove an item from the cart
  const removeFromCart = async (productId) => {
    try {
      // Call API to remove the product from cart
      const response = await axios.delete(
        "http://localhost:3000/remove-from-cart",
        {
          headers: { Authorization: `Bearer ${token}` }, // Include the JWT in the headers
          data: { productId }, // Send only productId in the body
        }
      );

      setCart(response.data.products);
    } catch (error) {
      console.error("Error removing product from cart:", productId);
    }
  };

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedProducts);
  };

  if (error)
    return (
      <div>
        {error}{" "}
        <Link to={"/collections"} className="text-blue-500">
          add products
        </Link>
      </div>
    );
  if (loading) {
    return;
  }
  const subtotal = cart.reduce(
    (acc, product) => acc + product.product.price * product.quantity,
    0
  );
  const shipping = 5.0; // Flat shipping rate
  const tax = subtotal * 0.08; // Example tax rate

  return (
    <>
      <Banner page="Cart" />
      <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mt-8">
          <div className="flow-root">
            <ul className="-my-6 divide-y divide-gray-200">
              {!loading &&
                cart.map((product) => (
                  <li key={product._id} className="py-6">
                    <Product
                      product={product.product}
                      quantity={product.quantity}
                      onQuantityChange={handleQuantityChange}
                      removeFromCart={removeFromCart}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* {cart ? (
          <>
            <h1>
              Your cart is Empty
              <Link to={"/"} className="text-blue-500">
                {" "}
                Add Products
              </Link>
            </h1>
          </>
        ) : ( */}
          <div className="flex flex-col gap-3 border-t border-gray-200 py-6 mt-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Shipping</p>
              <p>${shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Tax</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Order total</p>
              <p>${(subtotal + shipping + tax).toFixed(2)}</p>
            </div>
            <div className="mt-6">
              <Link
                to={"/check-out"}
                className="w-full text-center bg-indigo-600 block border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{" "}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
