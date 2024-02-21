import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {

    return (
    <nav className="navbar">
            <h2>Blog Post</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/BlogForm">New Blog</Link>
                {/* <a href="New Blog">New Blog</a> */}
                </div>
        </nav>
    )
}
export default Navbar;
