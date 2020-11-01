import React, { useEffect } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../DataLayer";
import Pizza from "./Pizza";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button } from "@material-ui/core";
function Products() {
  const { category } = useParams();
  const [{ products, displayProducts }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "GET_DISPLAY_PRODUCTS",
      payload: category,
    });
  }, [category, products]);

  console.log("category", category);
  console.log("display products", displayProducts);

  return (
    <div className="products">
      <div className="products__header">
        <div className="products__search">
          <input type="text" />
          <SearchIcon />
        </div>
        <div className="products__options">
          <Button className="products__login">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
              alt=""
              className="products__loginLogo"
            />
            Login
          </Button>
          <Button className="products__cart">
            <ShoppingBasketIcon className="products__cartLogo" />
            Orders
          </Button>
        </div>
      </div>
      <div className="products__body">
        {displayProducts.map((product) => (
          <Pizza
            name={product.name}
            id={product.id}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
