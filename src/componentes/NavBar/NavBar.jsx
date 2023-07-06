/* eslint-disable no-unused-vars */
import './NavBar.css'
import { CartWidget } from '../CartWidget/CArtWidget'
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <header id={'header'}>
        <div id={'contenedor'}>
          <Link to={"/"} > <img src="../img/logoCrane.png" alt="" /> </Link>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/"> 
              <h1>Crane</h1>
          </Link>
        </div>

        <nav id={'navLinks'}>
            <ul id={'liCategorias'}>
              <li>
                <NavLink id={'categorias'} to="/categoria/2"> Gorras </NavLink>
              </li>
              
              <li>
                <NavLink id={'categorias'} to="/categoria/3" > Pilusos </NavLink>
              </li>
            </ul>


        </nav>
        <CartWidget />
      </header>
      
    </>
  );
}

export default NavBar;
