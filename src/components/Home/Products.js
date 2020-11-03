import React, { useState, useEffect } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../DataLayer";
import Pizza from "./Pizza";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 500,
    overflowY: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    borderRadius: "5px",
    // padding: theme.spacing(2, 4, 3),
  },
}));

function Products() {
  const { category } = useParams();
  const [{ products, displayProducts, cart }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 className="products__cartTitle">Your Orders</h2>
          <div className="products__cartItems">
            {cart.map((item) => (
              <div className="products__cartItem">
                <h4>{item.name}</h4>
                <p>Qty: {item.qty}</p>
                <p>Price: {item.price * item.qty}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>

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
          <Button className="products__cart" onClick={() => setOpen(true)}>
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
