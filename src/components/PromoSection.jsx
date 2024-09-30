import React from "react";

const PromoSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://img.lovepik.com/background/20211021/large/lovepik-red-promotion-background-image_400736494.jpg"
          alt="New arrivals background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4 sm:text-3xl xs:text-3xl">
          New arrivals are here
        </h1>
        <p className="text-xl mb-8 max-w-2xl sm:text-lg xs:text-lg">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in
          stock.
        </p>
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition duration-300">
          Shop New Arrivals
        </button>
      </div>
    </div>
  );
};

export default PromoSection;
