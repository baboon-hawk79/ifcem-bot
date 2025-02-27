import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import logo from "./images/logo.png";
const { getData } = require("./db/db");
const cements = getData();

const tele = window.Telegram.Webapp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const script = document.getElementById("telescript");
    script.onload = () => tele.ready();
  });

  const onAdd = (cement) => {
    const exist = cartItems.find((x) => x.id === cement.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === cement.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...cement, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="heading">Замовити продукцію IFCEM</h1>
      <Cart cartItems={cartItems} />
      <div className="cards__container">
        {cements.map((cement) => {
          return (
            <Card
              cement={cement}
              key={cement.id}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
