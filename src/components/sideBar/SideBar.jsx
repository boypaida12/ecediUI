import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
  return (
    <>
      <header class="header">
        <h3 className="logo">Logo</h3>
        <ul class="nav">
          <li class="bell">
            <button>Create order</button>
          </li>
        </ul>
      </header>
      <div class="overlay">
        <div class="wrapper">
          <div class="side-nav">
            <ul class="menu">
              <h3 className="">CREDIT LINK</h3>
              <li class="menu-active">Marketplace</li>
              <li>Order</li>
              <li>Profile</li>
            </ul>
            {/* <div className="sidemen">
              <h4>Ballance</h4>

              <button>10,000</button>
            </div> */}
          </div>

          {/* <div class="main-content-wrapper">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            officia aliquam magni minima labore id illo consectetur commodi
            illum nesciunt ducimus quaerat eaque, quasi beatae doloribus ullam
            cum. Esse reprehenderit ipsa ratione voluptatibus sunt quasi eaque
            quia delectus ut! Ab beatae architecto atque unde pariatur in error
            est eveniet voluptatem.
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
