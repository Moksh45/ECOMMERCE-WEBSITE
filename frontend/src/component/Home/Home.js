import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css"
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";



const Home = () => {
    const dispatch = useDispatch();
    const { loading = true, error, products, productsCount } = useSelector(state => state.product)
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch])
    return (
        <Fragment>
            {loading ? (<Loader />
            ) : (
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
                        {products && products.map(product => (
                            <Product product={product} />
                        ))}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};


export default Home;