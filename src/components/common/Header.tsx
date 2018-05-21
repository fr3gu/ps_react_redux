import React from "react"
import "./Header.less"
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>&nbsp;|&nbsp;
            <NavLink to="/about" activeClassName="active" exact>About</NavLink>
        </nav>
    )
}