import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart__container">
    {cartItems.length === 0 ? "Корзина порожня" : ""}
    <br /> <span className="totalprice">Загальна вартість: ₴{totalPrice.toFixed(2)}</span>
    <Button
      title="Замовити"
      type={"checkout"}
      disable={cartItems.length === 0}
      onClick={onCheckout}
    />
    </div>
);
}

export default Cart;