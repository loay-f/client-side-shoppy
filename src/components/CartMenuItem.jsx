const CartMenuItem = (props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-3 h-28 p-3 border-t">
        <img
          src={props.image}
          alt="product img"
          className="h-full aspect-square"
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-navy">{props.title}</p>
          <p className="text-gray-600 text-xs">
            {props.price + " x " + props.quantity}
          </p>
          <p className="text-red font-semibold">${props.price}</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="gray"
        className="size-6 cursor-pointer"
        onClick={() => {}}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default CartMenuItem;
