import React from "react";
import { useSelector } from "react-redux";
import DisplayCard from "./DisplayCard";
import "../styles/Cart.css";

export default function Cart() {
  const data = useSelector((state) => state.item);

  const EmptyCart = () => {
    return <h2>Cart is Empty 👻</h2>;
  };

  return (
    <div className="cart">
      {!data.length ? (
        <EmptyCart />
      ) : (
        data.map((item) => {
          return <DisplayCard {...item} key={item.id} />;
        })
      )}
    </div>
  );
}
