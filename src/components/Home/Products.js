import React, { useState, useEffect } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../DataLayer";
import { types } from "../../Reducer";
import Pizza from "./Pizza";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import ListIcon from "@material-ui/icons/List";
import ViewListIcon from "@material-ui/icons/ViewList";
import { Button, IconButton, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import empty from "../../img/empty.svg";
import { saveToCart } from "../../utilities";
import { auth, provider } from "../../firebase";
import Card from "./Card";
import pizza from "../../img/pizza.jpg";

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
    top: 0,
    width: 400,
    height: 500,
    overflowY: "auto",
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[3],
    borderRadius: "5px",
    // padding: theme.spacing(2, 4, 3),
  },
}));

function Products() {
  const { category } = useParams();
  const [{ user, products, displayProducts, cart }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const removeOrder = (id) => {
    dispatch({
      type: types.REMOVE_TO_CART,
      payload: id,
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const logIn = () => {
    auth.signInWithPopup(provider);
  };

  useEffect(() => {
    dispatch({
      type: "GET_DISPLAY_PRODUCTS",
      payload: category,
    });
  }, [category, products]);

  useEffect(() => {
    saveToCart(cart);
  }, [cart]);

  console.log("category", category);
  console.log("display products", displayProducts);
  console.log("CART", cart);

  return (
    <div className="products">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 className="products__cartTitle">
            <ListIcon className="products__cartTitleIcon" />
            Orders
          </h2>
          {cart.length >= 1 ? (
            <div className="products__cartItems">
              {cart.map((item) => (
                <div key={item.id} className="products__cartItem">
                  <div className="products__cartItemInfo">
                    <h6>{item.name}</h6>
                    <p>Qty: {item.qty}</p>
                    <p>Price: {item.price * item.qty}</p>
                  </div>
                  <div className="products__cartItemOption">
                    <IconButton className="products__cartItemButton">
                      <EditIcon className="products__cartItemEdit" />
                    </IconButton>
                    <IconButton className="products__cartItemButton">
                      <ClearIcon
                        className="products__cartItemDelete"
                        onClick={() => removeOrder(item.id)}
                      />
                    </IconButton>
                  </div>
                </div>
              ))}
              <div className="products__cartTotal">
                <h5>Total: {getTotalPrice()}</h5>
              </div>
            </div>
          ) : (
            <div className="products__cartEmpty">
              <img src={empty} alt="" />
              <h6>You don't have any orders yet</h6>
            </div>
          )}

          <center>
            {cart.length >= 1 && (
              <Button className="products__checkoutButton">
                Proceed to Checkout
              </Button>
            )}
          </center>
        </div>
      </Modal>

      <div className="products__header">
        <div className="products__search">
          <input type="text" />
          <SearchIcon />
        </div>
        <div className="products__options">
          {user ? (
            <Button className="products__login">
              Hello, {user.displayName.split(" ")[0]}
            </Button>
          ) : (
            <Button className="products__login" onClick={logIn}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
                alt=""
                className="products__loginLogo"
              />
              Login
            </Button>
          )}

          <Button className="products__cart" onClick={() => setOpen(true)}>
            <ShoppingBasketIcon className="products__cartLogo" />
            Orders
          </Button>
        </div>
      </div>
      <div className="products__body">
        {displayProducts.map((product) => (
          <Pizza
            key={product.id}
            name={product.name}
            id={product.id}
            category={product.category}
            price={product.price}
          />
        ))}

        {/* {displayProducts.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            img={pizza}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Products;
