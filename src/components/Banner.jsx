import { NavLink } from "react-router-dom";

const Banner = (props) => {
  return (
    <section className="w-full h-[330px] bg-[url('./assets/3.jpg')] bg-center bg-cover text-white">
      <div className="flex flex-col h-full items-center gap-3 justify-center bg-black bg-opacity-50 p-4">
        <h2 className="text-3xl font-bold capitalize">{props.page}</h2>
        <div className="flex items-center gap-1">
          <NavLink to="/" className="hover:text-red-500">
            Home
          </NavLink>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <p>Trousers</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
