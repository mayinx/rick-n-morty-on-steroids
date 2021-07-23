import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "../../pages/HomePage.js";
import AboutPage from "../../pages/AboutPage.js";
import CharactersPage from "../../pages/CharactersPage.js";
import BrandLogo from "../../assets/Rick-and-Morty-PNG-250x250.png";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img id="app_logo" src={BrandLogo} className="BrandLogo" alt=""></img>

        <nav className="App__nav">
          <ul>
            <li>
              <NavLink className="NavLink" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="NavLink" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/characters">
                Characters
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/characters">
            <CharactersPage />
          </Route>
        </Switch>
      </main>
      <footer>
        <div>Made with love by Christian Daum</div>
      </footer>
    </div>
  );
}

export default App;
