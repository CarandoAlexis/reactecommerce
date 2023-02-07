import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
            <>
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="logo">
                            <a href="#" className="nav-link">
                            <span className="link-text logo-text">Alexis Tienda</span>
                            </a>
                        </li>
                        <li className="cortantes">
                            <a href="#" className="nav-link">
                            <span className="link-text">Cortantes y Marcadores</span>
                            </a>
                        </li>
                        <li className="muñecos">
                            <a href="#" className="nav-link">
                            <span className="link-text">Muñecos</span>
                            </a>
                        </li>
                        <li className="muñecos artis">
                            <a href="#" className="nav-link">
                            <span className="link-text">Muñecos Articulados</span>
                            </a>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </>
    )

}


export default NavBar;
