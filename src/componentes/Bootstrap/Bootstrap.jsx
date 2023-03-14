import React from "react";
import "./Bootstrap.css";
import Carrito from "../Carrito/cart";

function Bootstrap() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid text-white">
        <strong className="strong-nav">MATEMATICOS</strong>
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
              <a className="nav-link text-white" href="#">
                TERMOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                MATEROS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                BOMBILLAS
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MATES
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    CALABAZAS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    DE MADERA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    DE VIDRIO
                  </a>
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

export default Bootstrap;
