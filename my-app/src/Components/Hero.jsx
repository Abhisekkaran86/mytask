

import React from "react";
import "./Style/Hero.css";
import Hero1 from "../assets/hero.png";
import logo from "../assets/logo.jpeg";

function Hero() {
    return (
        <>
            
            <div className="topbar">
                <p>Flat 50% Off On Grocery Shop.</p>
                <div className="topbar-right">
                    <a href="/">Help?</a>
                    <a href="/">Track Order</a>
                    <a href="/">Language ▾</a>
                    <a href="/">Currency ▾</a>
                </div>
            </div>

          
            <nav className="navbar">
              
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <span className="logo-text">Blue <b>Berry</b></span>
                </div>

              
                <div className="nav-center">
                    <div className="dropdown">
                        <button className="dropbtn">Vegetables ▾</button>
                        <ul className="dropdown-menu">
                            <li><a href="/">Fruits</a></li>
                            <li><a href="/">Snacks</a></li>
                            <li><a href="/">Dairy</a></li>
                        </ul>
                    </div>
                    <input type="text" placeholder="Search products..." className="search-bar" />
                </div>

               
                <div className="nav-icons">
                    <a href="/">Login</a>
                    <a href="/">Wishlist (3)</a>
                    <a href="/">Cart (4)</a>
                </div>
            </nav>

        
            <div className="sub-navbar">
                <ul>
                    <li><a href="/">Home</a></li>

                    
                    <li className="dropdown">
                        <a href="/">Categories ▾</a>
                        <ul className="dropdown-menu">
                            <li><a href="/">Vegetables</a></li>
                            <li><a href="/">Fruits</a></li>
                            <li><a href="/">Snacks</a></li>
                        </ul>
                    </li>

                    <li><a href="/">Products</a></li>
                    <li><a href="/">Pages</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Offers</a></li>
                </ul>
               
            </div>

         
            <section className="hero">
                <div className="hero-text">
                    <h4>Flat 30% Off</h4>
                    <h1>
                        Explore <span>Healthy</span> & Fresh Fruits
                    </h1>
                    <button className="hero-btn">Shop Now</button>
                </div>
                <div className="hero-img">
                    <img src={Hero1} alt="fruits" />
                </div>
            </section>
        </>
    );
};

export default Hero;
