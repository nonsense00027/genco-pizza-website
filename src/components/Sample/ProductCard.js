import { Avatar, Button, ButtonGroup, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./ProductCard.css";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../DataLayer";
import swal from "@sweetalert/with-react";
import { types } from "../../Reducer";

function ProductCard({ name, price, category, id }) {
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [{ cart }, dispatch] = useStateValue();

  const increment = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  const addOrder = () => {
    dispatch({
      type: types.ADD_TO_CART,
      payload: { id, name, price, qty },
    });

    swal({
      title: "Order added!",
      text: `${qty} pc/s ${name}`,
      icon: "success",
      buttons: false,
    });
  };

  const isAdded = (id) => {
    const added = cart.filter((item) => item.id === id);
    return added.length > 0;
  };

  return (
    <div className="productCard">
      <div className="productCard__overlay">
        <img
          src="https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4-480x480.jpg"
          alt=""
        />
      </div>
      <div className="productCard__header">
        <Avatar
          src="https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4-480x480.jpg"
          className="productCard__img"
        />
      </div>
      <div className="productCard__body">
        <h5>{name}</h5>
        <div className="productCard__sizes">
          <ButtonGroup
            size="small"
            aria-label="small outlined button group"
            className="productCard__wholeSize"
          >
            <Button className="productCard__size productCard__sizeSelected">
              12"
            </Button>
            <Button className="productCard__size">14"</Button>
            <Button className="productCard__size">16"</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="productCard__footer">
        <div className="productCard__qty">
          <IconButton className="productCard__qtyButton" onClick={decrement}>
            <RemoveIcon className="productCard__qtyMinus" />
          </IconButton>
          <h6>{qty}</h6>
          <IconButton className="productCard__qtyButton" onClick={increment}>
            <AddIcon className="productCard__qtyPlus" />
          </IconButton>
        </div>
        <div className="productCard__order">
          <h6>P {price}.00</h6>
          <Button className="productCard__addOrder" onClick={() => addOrder()}>
            <ShoppingBasketIcon className="productCard__addOrderIcon" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
