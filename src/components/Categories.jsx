const categories = [
  {
    title: "New Arrivals",
    imageUrl: "https://via.placeholder.com/200x300?text=New+Arrivals", // Replace with real image URL
  },
  {
    title: "Productivity",
    imageUrl: "https://via.placeholder.com/200x300?text=Productivity", // Replace with real image URL
  },
  {
    title: "Workspace",
    imageUrl: "https://via.placeholder.com/200x300?text=Workspace", // Replace with real image URL
  },
  {
    title: "Accessories",
    imageUrl: "https://via.placeholder.com/200x300?text=Accessories", // Replace with real image URL
  },
  {
    title: "Sale",
    imageUrl: "https://via.placeholder.com/200x300?text=Sale", // Replace with real image URL
  },
];

const Categories = () => {
  return (
    <div className="w-[85%] mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-semibold">Shop by Category</h2>
        <a href="/categories" className="text-indigo-500 hover:underline">
          Browse all categories &rarr;
        </a>
      </div>
      <section className="grid grid-flow-col gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-lg shadow-lg overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow"
            >
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-72 object-cover transition-transform group-hover:scale-105 hover:brightness-105"
              />
              <div className="absolute z-10 left-0 bottom-0 text-white right-0 p-4 text-center">
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Categories;
