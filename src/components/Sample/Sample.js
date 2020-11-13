import React, { useEffect } from "react";
import "./Sample.css";
import ProductCard from "./ProductCard";
import Header from "./Header";
import Side from "./Side";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../DataLayer";
import { saveToCart } from "../../utilities";

function Sample() {
  const { category } = useParams();
  const [{ user, products, displayProducts, cart }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "GET_DISPLAY_PRODUCTS",
      payload: category,
    });
  }, [category, products]);

  useEffect(() => {
    saveToCart(cart);
  }, [cart]);

  console.log("DISPLAY", category);

  return (
    <div className="sample">
      <Side />
      <Header />
      {displayProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default Sample;
