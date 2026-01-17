import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`}>
      <div className=" h-60 w-56 rounded-lg  cursor-pointer active:scale-110 transition ease-in duration-75 hover:shadow-lg">
        <div className="w-full h-[80%] bg-white rounded-lg">
          <img
            src={product?.images?.[0]}
            alt={product?.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-light">{product?.title}</p>
          <p className="text-xl font-semibold">${product?.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
