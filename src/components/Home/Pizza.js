import React, { useState } from "react";
import "./Pizza.css";
import pizza from "../../img/pizza.jpg";
import { Button, Inpu, IconButton, Badge } from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Pizza({ name, price, category, id }) {
  const [qty, setQty] = useState(1);

  const increment = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <div className="pizza">
      <div className="pizza__header">
        <img src={pizza} alt="" />
        <div className="pizza__price">
          <p>P {price}.00</p>
        </div>
      </div>
      <div className="pizza__body">
        <h2 className="pizza__name">{name}</h2>
        <div className="pizza__sizes">
          <Button className="pizza__size selected">12"</Button>
          <Button className="pizza__size">14"</Button>
          <Button className="pizza__size">16"</Button>
        </div>
      </div>
      <div className="pizza__footer">
        <div className="pizza__qty">
          <input type="text" value={qty} disabled />
          <div className="pizza__qtyOptions">
            <IconButton className="pizza__qtyButton">
              <ArrowDropUpIcon
                className="pizza__qtyButtonOption"
                onClick={increment}
              />
            </IconButton>
            <IconButton className="pizza__qtyButton">
              <ArrowDropDownIcon
                className="pizza__qtyButtonOption"
                onClick={decrement}
              />
            </IconButton>
          </div>
        </div>
        <Button className="pizza__order">add order</Button>
      </div>
    </div>
  );
}

export default Pizza;
