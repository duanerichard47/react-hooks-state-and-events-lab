import React from "react";
import {useState} from "react";

function Item({ name, category }) {

const [inCart, setInCart] =useState(false)

  function handleClick() {
    setInCart(!inCart)
  }
const cartClass = inCart ? "in-cart" : ""


  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove from Cart" :"Add to Cart"}</button>
    </li>
  );
}

export default Item;
