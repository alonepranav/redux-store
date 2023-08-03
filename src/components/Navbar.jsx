import React, { useState } from "react";
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  let data = useSelector((state) => state.item);
  const [toggleClass, setToggleClass] = useState("");

  const open_close = (class_) => {
    setToggleClass(class_);
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => open_close("")}>
        <HashLink to={"/"}>
          <span
            style={{
              color: "#000",
            }}
          >
            REDUX STORE
          </span>
        </HashLink>
      </div>

      <div className={`links ${toggleClass}`}>
        <HashLink to={"/"} onClick={() => open_close("")}>
          <span className="link-span">Home</span>
        </HashLink>
        <HashLink to={"/cart"} onClick={() => open_close("")}>
          <span className="link-span">Cart</span>
        </HashLink>
        <h3 onClick={() => open_close("")}>CART ITEMS : {data.length}</h3>
      </div>

      <div className="icon">
        {toggleClass === "" ? (
          <AiOutlineMenu onClick={() => open_close("show")} />
        ) : (
          <AiOutlineClose onClick={() => open_close("")} />
        )}
      </div>
    </div>
  );
}
