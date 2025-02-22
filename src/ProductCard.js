import "./ProductCard.css";
import AddToCart from "./AddToCart";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div>{product.title}</div>
      <div>{product.price.value}</div>
      <AddToCart />
    </div>
  );
}

export default ProductCard;
