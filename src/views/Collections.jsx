import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import Banner from "../components/Banner";

const Collection = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  let url = "http://localhost:3000/products";
  if (category) {
    url += `/${category}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("An error occurred while fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [category, url]);

  if (error) return <div>{error}</div>;

  return (
    <>
      <Banner page="shirts" />
      <div className="flex justify-end items-center mt-16 w-11/12 mx-auto">
        <label
          htmlFor="sort"
          className="block mb-2 text-sm font-medium text-gray-900 w-16"
        >
          Sort By:
        </label>
        <select
          id="sort"
          className="w-44 bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 mr-10 cursor-pointer"
        >
          <option defaultChecked value="a-z">
            Alphabetically, A-Z
          </option>
          <option value="z-a">Alphabetically, Z-A</option>
          <option value="bestSelling">Best selling</option>
          <option value="priceAsc">Price, low to high</option>
          <option value="priceDes">Price, high to low</option>
        </select>
        <p className="text-gray-500">10 Products</p>
      </div>
      <div className=" grid grid-cols-4 gap-x-10 gap-y-16 w-[90%] mx-auto mt-20 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {loading ? (
          <p>Loading</p>
        ) : (
          products.map((product) => (
            <ProductItem
              key={product._id}
              id={product._id}
              title={product.title}
              sale={true}
              price={product.price}
              img={product.imageUrl}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Collection;
