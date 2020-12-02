import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <div className="container">
            <NavLink exact to="/" className="btn btn-primary">Home</NavLink>
            <NavLink to="/JoinPage" className="btn btn-primary">join</NavLink>
            <NavLink to="/CreatePage" className="btn btn-primary">Create</NavLink>
            <NavLink to="/AboutPage" className="btn btn-primary">About</NavLink>

        </div>
    );
}

export default NavBar;