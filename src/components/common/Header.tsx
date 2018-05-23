import React from "react"
import { NavLink } from "react-router-dom";
import "./Header.less"
import LoadingDots from "./LoadingDots";
import ProgressBar from "./ProgressBar";

interface IHeaderProps {
    loading: boolean;
}

export const Header = ({loading}: IHeaderProps) => {
    return (
        <section id="header">
            { loading && <ProgressBar interval={100} scale={20} /> }
            <nav>
                <NavLink to="/" activeClassName="active" exact>Home</NavLink>&nbsp;|&nbsp;
                <NavLink to="/courses" activeClassName="active" exact>Courses</NavLink>&nbsp;|&nbsp;
                <NavLink to="/about" activeClassName="active" exact>About</NavLink>&nbsp;
            </nav>
        </section>
    )
}