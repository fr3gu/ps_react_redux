import React, { Component } from "react"
import "./Header.less"
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    <img src="images/logo.jpg" alt="logo" style={{ height: "60px" }}/>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/authors">Authors</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                </ul>
            </nav>
        );
    }
}