import React, {useState} from "react";

function Item({ name, category }) {
  const[inCart, setInCart] = useState(false)

    function handleCart(){
      setInCart((previousInCart)=> !previousInCart)
    }
    //item = not in cart

    const className = inCart ? "in-cart" : ""
    const buttonMessage = inCart ? "Remove From Cart" : "Add To Cart" 
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart}className="add">{buttonMessage}</button>
    </li>
  );
}

export default Item;
