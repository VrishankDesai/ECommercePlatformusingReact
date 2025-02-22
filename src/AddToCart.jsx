import CartContext from "./CartContext";
import { useContext } from "react";
function AddToCart() {
  const { cart, increase, decrease } = useContext(CartContext);
  function increasef() {
    increase();
  }
  return <button onClick={increasef}> Add To Cart </button>;
}
export default AddToCart;
