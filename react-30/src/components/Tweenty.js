import React from "react";
import { useCart } from "../context/CartContext";

const Tweenty = () => {
  const { cartState, cartDispatch } = useCart();
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
  ];

  const addToCart = (item) => {
    const existingCartItem = cartState.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: existingCartItem.quantity + 1 },
      });
    } else {
      cartDispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    }
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: itemId, quantity },
      });
    }
  };

  const removeFromCart = (itemId) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  return (
    <div>
      <h2 className="text-2xl">Shopping Cart</h2>
      <ul>
        {cartState.cartItems.map((item) => (
          <li className="f mx-2" key={item.id}>
            {item.name} - {item.quantity}
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="bg-blue-600 text-white p-1 m-2"
            >
              +
            </button>
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="bg-blue-600 text-white p-1 m-2"
            >
              -
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white p-1 m-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <hr className="border-black m-5" />
      <h2 className="text-xl">Product List</h2>
      <ul>
        {products.map((i) => (
          <li className="m-2" key={i.id}>
            {i.name} {"    "}
            <button
              className="bg-blue-600 text-white p-1 m-2"
              onClick={() => addToCart(i)}
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tweenty;
