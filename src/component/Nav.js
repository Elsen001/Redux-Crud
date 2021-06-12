import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="post">
            <NavLink exact to="/"><h1>Post App</h1></NavLink> 
            <NavLink to="/add" > <button className="btn btn-primary"><i className="fas fa-plus"></i>Add</button></NavLink>
        </div>
    )
}

export default Nav
