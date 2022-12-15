import React from "react"
import { Link } from "react-router-dom";


// 3 steps to create a Nav bar using react
// First code the UI 
// Second: insert the UI in a return statement
// Thirdly, insert the return statement in a functional componet and then export the components

const Nav = () => {
    return ( <nav className="navbar navbar-expand-sm justify-content-end">
    <a className="navbarbrand" href="#">
        <img src="" />
    </a>
    {/* <button
    className="navbar-toggler"
    type="button"
    data-type= "collapse"
    data-target= "#NavDropDown"
    aria-controls="#NavDropDown">
        <span className="navbar-toggler-icon"></span>
    </button> */}
    <ul className="navbar-nav"> 

            <li className="nav-item active">
                <Link to="./" className="nav-link"> Home</Link>    
            </li>
            <li className="nav-item">
                <Link to='/About'   className="nav-link"> About</Link>
            </li>
            <li className="nav-item">
                <Link to= '/Skills'  className="nav-link"> Skills </Link>
            </li>
            <li className="nav-item">
                <Link to= '/Projects'  className="nav-link"> Projects </Link>
            </li>
            <li className="nav-item">
                <Link to= '/Contact'  className="nav-link"> Contact </Link>
            </li>
           
           

     </ul>





</nav> );
}

export default Nav;

