import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import "./search.css"

const Search = () => {
    const history = useHistory();
    const [showNav, setShowNav] = useState(false);
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/products/${keyword}`);
        } else {
            history.push("/products");
        }
    };

    return (
        <div className="Header">
            <header>
                <MenuIcon fontSize="large" onClick={() => setShowNav(!showNav)} />

                <form className="searchBox" onSubmit={searchSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Search a Product ..."
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <input type="submit" value="Search" />
                </form>
            </header>
            <Navbar show={showNav} />
        </div>
    );
}

export default Search