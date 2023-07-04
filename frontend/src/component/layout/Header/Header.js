import React, { useState } from "react";
import './Header.css';
import Navbar from './Navbar';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className={`Header ${showNav ? "white" : ""}`}>
      <header>
        <MenuIcon sx={{ fontSize: 40 }} onClick={() => setShowNav(!showNav)} />
      </header>
      <Navbar show={showNav} />
    </div>
  );
}

export default Header;
