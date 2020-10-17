import React from "react";
import "./Specials.css";
import { Button } from "@material-ui/core";

function Specials() {
  return (
    <div>
      <div className="specials">
        <h2 className="landing__title">our specials</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          consequuntur architecto ratione, distinctio eius illo eligendi
          veritatis doloremque totam aperiam!
        </p>
        <div className="specials__content">
          {/* <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg" alt=""/> */}
          <div className="specials__contentImg"></div>
          <div className="specials__info">
            <h2>Epic Hawaiian</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis, voluptatibus, cupiditate excepturi facere iusto vero
              voluptatum ab inventore odio fuga unde recusandae sequi vel
              praesentium ut consequuntur quia suscipit!
            </p>
            <Button className="specials__orderButton">order now</Button>
          </div>
          <div className="specials__info">
            <h2>Epic Hawaiian</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis, voluptatibus, cupiditate excepturi facere iusto vero
              voluptatum ab inventore odio fuga unde recusandae sequi vel
              praesentium ut consequuntur quia suscipit!
            </p>
            <Button className="specials__orderButton">order now</Button>
          </div>
          <div className="specials__contentImg"></div>
          <div className="specials__contentImg"></div>
          <div className="specials__info">
            <h2>Epic Hawaiian</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis, voluptatibus, cupiditate excepturi facere iusto vero
              voluptatum ab inventore odio fuga unde recusandae sequi vel
              praesentium ut consequuntur quia suscipit!
            </p>
            <Button className="specials__orderButton">order now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
