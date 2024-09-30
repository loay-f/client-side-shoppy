const ProductColorIcon = (props) => {
  return (
    <div
      className={`w-8 aspect-square rounded-full cursor-pointer overflow-hidden border-1 border-gray-700 ${props.className} `}
      onClick={props.onClick}
    >
      <img src={props.src} alt="color icon" />
    </div>
  );
};

export default ProductColorIcon;
