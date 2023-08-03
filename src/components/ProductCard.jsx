import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartItemSlice";

export default function ProductCard({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}) {
  const getStar = (no) => {
    let str = "";
    for (let i = 0; i < Math.ceil(no); i++) str += "⭐";
    return str;
  };

  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="img">
        <img src={image} alt="" />
      </div>

      <div className="text">
        <h4>{title}</h4>
        <p>{getStar(rating.rate)}</p>
        <h2>$ {price}</h2>
      </div>

      <button
        onClick={() =>
          dispatch(
            add({
              category,
              description,
              id,
              image,
              price,
              rating,
              title,
            })
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
