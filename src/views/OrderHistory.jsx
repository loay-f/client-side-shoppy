import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import axios from "axios";


const OrderHistory = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user-orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        setError("An error occurred while fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="w-[80%] sm:w-[95%] xs:w-[95%] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Order history</h1>
      <p className="text-gray-600 mb-20">
        Check the status of recent orders, manage returns, and discover similar
        products.
      </p>

      {!loading &&
        orders.map((order, index) => (
          <div key={order._id} className="mb-10 border rounded-lg">
            <div className="text-sm p-5 flex px-10 justify-between items-center">
              <div>
                <p className="font-semibold">Order number</p>
                <p className="text-gray-600">{order._id}</p>
              </div>
              <div className="sm:hidden xs:hidden">
                <p className="font-semibold">Date placed</p>
                <p className="text-gray-600">{order.orderDate}</p>
              </div>
              <div>
                <p className="font-semibold">Total amount</p>
                <p className="text-gray-600">{order.totalPrice}</p>
              </div>
              <div>
                <div className="md:hidden sm:hidden xs:hidden">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg mr-2 hover:bg-gray-50 border-2">
                    View Order
                  </button>
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 border-2">
                    View Invoice
                  </button>
                </div>
                <div className="hidden relative md:block sm:block xs:block">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="bg-white text-gray-500 hover:text-black">
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
                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                          />
                        </svg>
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            View Order
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            View Invoice
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>
            {!loading &&
              order.products.map((item, itemIndex) => {
                // console.log(order)
                return (
                  <div
                    key={itemIndex}
                    className="p-8 sm:pb-0 xs:pb-0 sm:px-0 space-y-5 border-t"
                  >
                    <div className="flex">
                      <img
                        src={item.product.imageUrl}
                        alt={"item.name"}
                        className="w-52 h-52 object-cover rounded mr-4 sm:w-32 sm:h-32 xs:w-32 xs:h-32"
                      />
                      <div className="flex-grow text-sm">
                        <div className="flex justify-between items-start mb-2 sm:flex-col xs:flex-col sm:gap-3 xs:gap-3">
                          <h3 className="text-lg font-semibold">{item.product.title}</h3>
                          <p className="font-semibold">{item.product.price}</p>
                        </div>
                        <p className="text-gray-600 mb-4 sm:hidden xs:hidden">
                          {item.product.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:items-start sm:flex-col sm:gap-5 xs:items-start xs:flex-col xs:gap-5">
                      <p className="text-green-600 flex items-center sm:px-5">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        In progress
                      </p>
                      <div className="flex sm:justify-between xs:justify-between sm:w-full xs:w-full gap-5 sm:gap-0 xs:gap-0">
                        <button className="text-indigo-600 sm:w-1/2 xs:w-1/2 hover:text-indigo-800 border sm:rounded-none xs:rounded-none p-3 rounded-md">
                          View product
                        </button>
                        <button className="text-indigo-600 sm:w-1/2 xs:w-1/2 hover:text-indigo-800 border sm:rounded-none xs:rounded-none p-3 rounded-md">
                          Buy again
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
    </div>
  );
};

export default OrderHistory;
