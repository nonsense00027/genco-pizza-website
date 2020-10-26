import React, { useEffect } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../DataLayer";

function Products() {
  const { category } = useParams();
  const [{ displayProducts }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "GET_DISPLAY_PRODUCTS",
      payload: category,
    });
  }, [category]);

  return (
    <div className="products">
      <h1>Products Component</h1>
    </div>
  );
}

export default Products;
