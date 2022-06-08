import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  // const [click, setClick] = useState(false);

  return (
    <>
      <header>
        <nav className="navBar">
          <div className="navbar-container">
            <Link to="" className="navbar-logo">
              Travel
              <i class="bx bx-trip" />
            </Link>
            {/* <div className="menu-icon">
              <i className={click ? "bx bx-x" : "bx bx-menu"} />
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;