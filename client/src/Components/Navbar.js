import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/'}>Stack Overflow</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Products</Link>
                <Link to={'/'}>For Teams</Link>
            </nav>
        </>
    )
}