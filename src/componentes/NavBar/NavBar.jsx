import React from "react";
import "./NavBar.css";
import Carrito from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid text-white">
        <Link className="strong-nav" to="/">MATEMATICOS</Link>
        <button
          className="navbar-toggler menu-hamburguesa"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon hamburguesa-span"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  d-flex">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category/Termo">
                TERMOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category/Matero">
                MATEROS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category/Bombilla">
                BOMBILLAS
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="/mates"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MATES
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/category/MateCalabaza">
                    CALABAZAS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/MateMadera">
                    DE MADERA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/MateVidrio">
                    DE VIDRIO
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <Carrito/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
