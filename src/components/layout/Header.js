import React from 'react'
import { Link } from 'react-router-dom'
const Header = () =>{
        return (
            <nav class="navbar navbar-expand-lg item-center navbar-dark bg-primary">
                <div class="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link to="/"><a className="nav-link" href="#">Portfolio</a></Link></li>
                    <li className="nav-item"><Link to="/projects"><a className="nav-link" href="#">Projects</a></Link></li>
                    <li className="nav-item"><Link to="/photos"><a className="nav-link" href="#">Photos</a></Link></li>
                    <li className="nav-item"><Link to="/blog"><a className="nav-link" href="#">Blog</a></Link></li>
                    </ul>
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
