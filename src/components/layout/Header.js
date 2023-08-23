import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () =>{
    const [state,setState] = useState(true)
    const onClick = (e) =>{
        e.preventDefault()
        setState(!state)
    }
    const navItems = (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {/* <li className="nav-item"><Link to="/"><a className="nav-link" href="/">Portfolio</a></Link></li> */}
    <li className="nav-item"><Link to="/projects"><h3 className="nav-link text-light" href="/">Projects</h3></Link></li>
    <li className="nav-item"><Link to="/photos"><h3 className="nav-link text-light" href="/">Photos</h3></Link></li>
    {/* <li className="nav-item"><Link to="/blog"><h3 className="nav-link text-light" href="/">Blog</h3></Link></li> */}
    </ul>
    )    
    return (
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid text-light">
                <a className="navbar-brand text-light" href="/">Portfolio</a>
                {navItems}

                </div>
            </nav>
        )
}

const style = {
  height: "30vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}
export default Header
