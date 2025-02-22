import "./styles.css";
import { useState } from "react";
import Products from "./Products";
import CartContext from "./CartContext";

export default function App() {
  //let [count, setCount] = useState(0);
  //let [count2, setCount2] = useState(0);
  const [cart, setCart] = useState({});

  function increase() {
    console.log("increment");
  }

  function decrease() {
    console.log("decrement");
  }
  return (
    <CartContext.Provider value={{ cart, increase, decrease }}>
      ;
      <div className="App">
        <Products />
      </div>
    </CartContext.Provider>
  );
}
