import ProductCard from "./ProductCard";

import { useEffect, useState } from "react";

const products = [
  {
    title: "Apple iPhone 14",
    price: "Rs. 10,000",
  },
  {
    title: "Apple iPhone 13",
    price: "Rs. 70,000",
  },
  {
    title: "Google Pixel 7",
    price: "Rs. 50,000",
  },
  {
    title: "Nokia 1100",
    price: "Rs. 2,000",
  },
  {
    title: "Samsung Galaxy S10",
    price: "Rs. 1,00,000",
  },
  {
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000",
  },
];

function Products() {
  const [products, setProducts] = useState([]);
  console.log("rerendered");

  useEffect(function () {
    console.log("useEffect");
    fetch("https://run.mocky.io/v3/ffb82a8a-638e-4919-b773-af827fba73a5")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div>
      {products.map(function (item) {
        return <ProductCard product={item} key={item.id} />;
      })}
    </div>
  );
}

export default Products;
