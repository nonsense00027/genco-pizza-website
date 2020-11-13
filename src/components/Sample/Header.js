import { Button, Drawer } from "@material-ui/core";
import React, { useState } from "react";
import "./Header.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../DataLayer";
import CartItem from "./CartItem";

function Header() {
  const [{ user, products, displayProducts, cart }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const login = () => {
    auth.signInWithPopup(provider);
  };

  console.log("CART", cart);

  return (
    <div className="header">
      <div className="header__menus">
        <h6>Special Offers</h6>
        <h6 className="header__menuSelected">Pizza</h6>
        <h6>Dessert</h6>
        <h6>Pasta</h6>
        <h6>Drinks</h6>
      </div>
      <div className="header__actions">
        {user ? (
          <Button className="header__login">
            Hello, {user.displayName.split(" ")[0]}
          </Button>
        ) : (
          <Button className="header__login" onClick={login}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
              alt=""
              className="products__loginLogo"
            />
            Login
          </Button>
        )}
        <Button className="header__cart" onClick={() => setOpen(true)}>
          Orders
        </Button>
      </div>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="header__cartDrawer">
          {cart.map((item) => (
            <CartItem
              name={item.name}
              qty={item.qty}
              price={item.price}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
