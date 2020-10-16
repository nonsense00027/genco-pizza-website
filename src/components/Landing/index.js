import React from "react";
import '../../css/Landing.css'
import logo from '../../img/logo.png'
import {Button} from '@material-ui/core'

function index() {
  return (
    <div className="landing">

      {/* Hero */}
      <section className="section landing__hero" >
        <div className="landing__content">
          <img src={logo} alt="" className="landing__logo"/>
          <h1>Italian-inspired <br/> homemade pizza </h1>
          <p>We deliver them door to door so you can enjoy right in the comforts of your home. Available in 6 yummy variants perfect for sharing with your family and friends.</p>
          <div className="landing__options">
            <Button className="landing__orderButton">order now</Button>
            <Button className="landing__contactButton">contact us</Button>
          </div>
        </div>
        
      </section>


      {/* Statistics */}

      {/* Specialty */}
      <section className="section">
        <div className="landing__specialty">
          <h2 className="landing__title">our specials</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequuntur architecto ratione, distinctio eius illo eligendi veritatis doloremque totam aperiam!</p>
          <div className="landing__specialtyContent">
            {/* <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg" alt=""/> */}
            <div className="landing__specialtyContentImg"></div>
            <div className="landing__specialtyInfo">
              <h2>Epic Hawaiian</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis, voluptatibus, cupiditate excepturi facere iusto vero voluptatum ab inventore odio fuga unde recusandae sequi vel praesentium ut consequuntur quia suscipit!</p>
              <Button className="landing__orderButton">order now</Button>
            </div>
            <div className="landing__specialtyInfo">
              <h2>Epic Hawaiian</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis, voluptatibus, cupiditate excepturi facere iusto vero voluptatum ab inventore odio fuga unde recusandae sequi vel praesentium ut consequuntur quia suscipit!</p>
              <Button className="landing__orderButton">order now</Button>
            </div>
            <div className="landing__specialtyContentImg"></div>
            <div className="landing__specialtyContentImg"></div>
            <div className="landing__specialtyInfo">
              <h2>Epic Hawaiian</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis, voluptatibus, cupiditate excepturi facere iusto vero voluptatum ab inventore odio fuga unde recusandae sequi vel praesentium ut consequuntur quia suscipit!</p>
              <Button className="landing__orderButton">order now</Button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Location */}

      {/* Footer */}
    </div>
  );
}

export default index;
