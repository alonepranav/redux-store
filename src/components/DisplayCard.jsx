import React from "react";
import { useDispatch } from "react-redux";
import "../styles/DisplayCard.css";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { increment, decrement, deleteItem } from "../redux/cartItemSlice";

export default function DisplayCard({
  id,
  image,
  price,
  title,
  qty,
}) {
  const dispatch = useDispatch();

  return (
    <div className="display-card">
      <div className="img">
        <img src={image} alt="" />
      </div>

      <div className="text">
        <h4>{title.slice(0,70)}...</h4>
        <h2>$ {price}</h2>
        <div className="btn">
          <button onClick={() => dispatch(decrement(id))}>
            <AiOutlineMinus />
          </button>
          <h3>{qty}</h3>
          <button onClick={() => dispatch(increment(id))}>
            <AiOutlinePlus />
          </button>
          <button onClick={() => dispatch(deleteItem(id))}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
