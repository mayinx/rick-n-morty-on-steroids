import BrandLogo from "../../assets/Rick-and-Morty-PNG-250x250.png";
import { ReactComponent as RickAndMortyLogo } from "../../assets/Rick_and_Morty.svg";
import { NavLink } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";

import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [navToggled, setNavToggled] = useState(false);
  const navClass = navToggled ? `App__nav App__nav--toggled` : `App__nav`;
  const navTogglerClass = navToggled ? `navToggle navToggle--toggled` : `navToggle`;

  const toggleNav = () => setNavToggled(!navToggled);
  const hideNav = () => setNavToggled(false);

  return (
    <header className="App__header">
      <img id="app_logo" src={BrandLogo} className="BrandLogo" alt="" />

      <nav className={navClass}>
        <div className="NavHeader">
          <RickAndMortyLogo className="NavLogo" />
        </div>

        <ul>
          <li>
            <NavLink className="NavLink" exact={true} to="/" onClick={hideNav}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/characters" onClick={hideNav}>
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/favs" onClick={hideNav}>
              Favs
            </NavLink>
          </li>
          {/* <li>
              <NavLink className="NavLink" to="/about" onClick={hideNav}>
                About
              </NavLink>
            </li> */}
        </ul>
      </nav>
      <div className={navTogglerClass} onClick={toggleNav}>
        <GiHamburger />
      </div>
    </header>
  );
}
