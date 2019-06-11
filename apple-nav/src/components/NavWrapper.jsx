import React from 'react'
import {Link} from 'react-router-dom'
import { FaApple} from 'react-icons/fa'

const NavWrapper = () => {
    return(
        <div>
            <nav className="nav-wrapper">
                <div className="nav-item">
                <Link to="/"><FaApple size="20px"></FaApple></Link>
                <Link to="/mac">Mac</Link>
                <Link to="/iPad">iPad</Link>
                <Link to="/iPhone">iPhone</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/tv">TV</Link>
                <Link to="/music">Music</Link>
                <a href="https://support.apple.com/">Support</a>
                </div>
            </nav>
        </div>
    )
}

export default NavWrapper