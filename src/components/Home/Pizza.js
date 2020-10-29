import React, { useState } from "react";
import "./Pizza.css";
import pizza from "../../img/pizza.jpg";
import { Button, Inpu, IconButton } from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Pizza({ name, price, category, id }) {
  const [qty, setQty] = useState(1);
  return (
    <div className="pizza">
      <div className="pizza__header">
        <img src={pizza} alt="" />
      </div>
      <div className="pizza__body">
        <h2 className="pizza__name">{name}</h2>
      </div>
      <div className="pizza__footer">
        {/* <input type="number" name="" id="" /> */}
        <form>
          <div className="pizza__qty">
            <h2>{qty}</h2>
            <div className="pizza__qtyOptions">
              <IconButton className="pizza__qtyButton">
                <ArrowDropUpIcon />
              </IconButton>
              <IconButton className="pizza__qtyButton">
                <ArrowDropDownIcon />
              </IconButton>
            </div>
          </div>
          <Button>add to order</Button>
        </form>
      </div>
    </div>
  );
}

export default Pizza;
