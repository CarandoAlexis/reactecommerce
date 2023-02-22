import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
            <>
            <header className="App-header">
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="logo">
                            <Link to="/"> 
                                <button>Alexis Tienda</button>
                            </Link>
                        </li>
                        <li className="catalogo">
                            <Link to="/Catalogo"> 
                                <button>Catalogo Completo</button>
                            </Link>
                        </li>
                        <li className="cortante">
                            <Link to={`/categoria/${"cortante"}`}> 
                                <button>Cortantes</button>
                            </Link>
                        </li>
                        <li className="marcador">
                            <Link to={`/categoria/${"marcador"}`}> 
                                <button>Marcadores</button>
                            </Link>
                        </li>
                        <li className="muñeco">
                            <Link to={`/categoria/${"muñeco"}`}> 
                                <button>Muñecos</button>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/cart"}>
                                <CartWidget/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            </>
    )

}


export default NavBar;
