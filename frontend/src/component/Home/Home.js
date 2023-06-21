import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css"
// import Product from "./ProductCard";

// const product = {
//     name:"T-shirt",
//     images:[{url: "https://i.ibb.co/DRST11n/1.webp"}],
//     price:"2000",
//     _id:"hello"
// }

const Home = () => {
    return (
        <Fragment>
            <div className="banner">
                <h1>Welcome to Maa Provision Stores</h1>
                <h2>FIND AMAZING PRODUCTS BELOW</h2>


                <a href="#container">
                    <button>
                        Scroll <CgMouse />
                    </button>
                </a>
            </div>

            <h2 className="homeHeading">Featured Products</h2>
            <div>
            {/* <div className="container" id="container">
                <Product product={product}/> */}
            </div>
        </Fragment>
    );
};


export default Home;