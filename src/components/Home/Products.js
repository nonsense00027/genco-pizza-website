import React, { useEffect } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../DataLayer";
import Pizza from "./Pizza";

function Products() {
  const { category } = useParams();
  const [{ products, displayProducts }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "GET_DISPLAY_PRODUCTS",
      payload: category,
    });
  }, [category, displayProducts]);

  console.log("category", category);
  console.log("display products", displayProducts);

  return (
    <div className="products">
      <div className="products__body">
        {displayProducts.map((product) => (
          <Pizza
            name={product.name}
            id={product.id}
            category={product.category}
            price={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
