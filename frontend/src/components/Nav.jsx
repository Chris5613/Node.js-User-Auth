import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const Nav = () => {
return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">User-Auth</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Logout</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Nav