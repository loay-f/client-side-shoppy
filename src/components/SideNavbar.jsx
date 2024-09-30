import { useState } from "react";

const SideNavbar = (props) => {
  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isTShirtsOpen, setIsTShirtsOpen] = useState(false);
  const [isTrousersOpen, setIsTrousersOpen] = useState(false);
  const [isKidsOpen, setIsKidsOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);

  return (
    <div className="z-10 fixed hidden inset-0 h-full w-full bg-white xs:block p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 cursor-pointer ml-auto my-5"
        onClick={() => {
          props.setSideNav(false);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                setIsMenOpen(!isMenOpen);
              }}
              className={`w-full text-left ${isMenOpen && "text-red"}`}
            >
              <div className="flex justify-between items-center cursor-pointer py-2">
                <p>Men</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`size-4 transition-all ${
                    isMenOpen && "rotate-180"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </button>
            <ul
              className={`ml-4 transition-max-height duration-300 ease-in-out overflow-hidden ${
                isMenOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <li>
                <button
                  onClick={() => {
                    setIsTShirtsOpen(!isTShirtsOpen);
                  }}
                  className={`w-full text-left ${isTShirtsOpen && "text-red"}`}
                >
                  <div className="flex justify-between items-center cursor-pointer py-2">
                    <p>T-shirts</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`size-4 transition-all ${
                        isTShirtsOpen && "rotate-180"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </button>
                <ul
                  className={`ml-4 transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isTShirtsOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <li className="py-1 hover:text-red cursor-pointer">
                    All T-Shirts
                  </li>
                  <li className="py-1 hover:text-red cursor-pointer">
                    Basic T-Shirts
                  </li>
                  <li className="py-1 hover:text-red cursor-pointer">
                    Polo T-Shirts
                  </li>
                </ul>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsTrousersOpen(!isTrousersOpen);
                  }}
                  className={`w-full text-left ${isTrousersOpen && "text-red"}`}
                >
                  <div className="flex justify-between items-center cursor-pointer py-2">
                    <p>Trousers</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`size-4 transition-all ${
                        isTrousersOpen && "rotate-180"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </button>
                <ul
                  className={`ml-4 transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isTrousersOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <li className="py-1 hover:text-red cursor-pointer">
                    All trousers
                  </li>
                  <li className="py-1 hover:text-red cursor-pointer">Jeans</li>
                  <li className="py-1 hover:text-red cursor-pointer">
                    Joggers
                  </li>
                  <li className="py-1 hover:text-red cursor-pointer">Chino</li>
                </ul>
              </li>
              <li className="py-2 hover:text-red cursor-pointer">Shirts</li>
              <li className="py-2 hover:text-red cursor-pointer">Shoes</li>
            </ul>
          </li>
          <li>
            <button
              onClick={() => {
                setIsKidsOpen(!isKidsOpen);
              }}
              className={`w-full text-left ${isKidsOpen && "text-red"}`}
            >
              <div className="flex justify-between items-center cursor-pointer py-2">
                <p>Kids</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`size-4 transition-all ${
                    isKidsOpen && "rotate-180"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </button>
            <ul
              className={`ml-4 transition-max-height duration-300 ease-in-out overflow-hidden ${
                isKidsOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <li className="py-1 hover:text-red cursor-pointer">T-Shirts</li>
              <li className="py-1 hover:text-red cursor-pointer">Shirts</li>
              <li className="py-1 hover:text-red cursor-pointer">Trousers</li>
            </ul>
          </li>
          <li>
            <button
              onClick={() => {
                setIsAccessoriesOpen(!isAccessoriesOpen);
              }}
              className={`w-full text-left ${isAccessoriesOpen && "text-red"}`}
            >
              <div className="flex justify-between items-center cursor-pointer py-2">
                <p>Accessories</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`size-4 transition-all ${
                    isAccessoriesOpen && "rotate-180"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </button>
            <ul
              className={`ml-4 transition-max-height duration-300 ease-in-out overflow-hidden ${
                isAccessoriesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <li className="py-1 hover:text-red cursor-pointer">Perfumes</li>
              <li className="py-1 hover:text-red cursor-pointer">Socks</li>
              <li className="py-1 hover:text-red cursor-pointer">Caps</li>
            </ul>
          </li>
          <li className="py-2 hover:text-red cursor-pointer">Branches</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
