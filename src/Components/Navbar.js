import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="navText">HOME</Link>
            <Link to="/aboutme" className="navText">ABOUT ME</Link>
            <Link to="/projects" className="navText">PROJECTS</Link>
        </nav>
    )
}
export default Navbar