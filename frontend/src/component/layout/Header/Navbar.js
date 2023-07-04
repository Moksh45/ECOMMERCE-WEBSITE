const Navbar = ({show}) => {
    return(
        <div className={show ? 'sidenav active ' : 'sidenav'}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
                <li>
                    <a href="/login">Sign In</a>
                </li>
            </ul>
        </div>
    )
    }
    
    export default Navbar;