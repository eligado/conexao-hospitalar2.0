"use client";

import Link from "next/link";
import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <Link href="/">
          <img src="logo.png" className="header_logoimg" alt="logo" />
        </Link>
      </div>

      <div className="superdiv">
        <nav id="main-menu">
          <ul>
          <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/hospital">Hospital</Link>
              </li>
              <li>
                <Link href="/upa">Upa</Link>
              </li>
              <li>
                <Link href="/Spa">Spa</Link>
              </li>
              <li>
                <Link href="/Ubs">Ubs</Link>
              </li>
              <li>
                <Link href="/#sobre">Sobre</Link>
              </li>
          </ul>
        </nav>

        <input type="checkbox" id="hamburger-input" className="burger-shower" />
        <label id="hamburger-menu" htmlFor="hamburger-input">
          <nav id="sidebar-menu">
            <h3>Menu</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/hospital">Hospital</Link>
              </li>
              <li>
                <Link href="/upa">Upa</Link>
              </li>
              <li>
                <Link href="/Spa">Spa</Link>
              </li>
              <li>
                <Link href="/Ubs">Ubs</Link>
              </li>
              <li>
                <Link href="/#sobre">Sobre</Link>
              </li>
            </ul>
          </nav>
        </label>
      </div>
      <div className="overlay"></div>
    </div>
  );
}
