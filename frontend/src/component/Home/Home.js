import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css"
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { UseSelector, useDispatch } from "react-redux";



const product = {
    name: "T-shirt",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
    price: "2000",
    _id: "hello"
}

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    return (
        <Fragment>

            <MetaData title="Maa Provision Stores" />
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
            <div className="container" id="container">
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />

                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
        </Fragment>
    );
};


export default Home;