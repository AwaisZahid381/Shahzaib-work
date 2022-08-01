import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <div className="mainNav">
      <div className="logo">
        <h1>Photo<span className="ThisSpan">Clikk</span></h1>
      </div>
      <div className="otherMat">
        <div className="listing">

            <Link className="linkies" to='/'>Home</Link>
            <Link className="linkies" to='/business'>List your business</Link>
            <Link className="linkies" to='/SellRent'>Buy/Sell/Rent</Link>
            <Link className="linkies" to='/Store'>Store</Link>
            <Link className="linkies" to='/Blog'>Blog</Link>
            <Link className="linkies" to='/About'>About us</Link>
            <Link className="linkies" to='/Contact'>Contact us</Link>
        </div>
        <div className="profile">
          <img className="images" src="https://c4.wallpaperflare.com/wallpaper/69/486/503/face-girl-eye-beauty-wallpaper-preview.jpg" alt="HinaPic" />
          <p>Hina</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
