import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "../../pages/Home.js";
import About from "../../pages/About.js";
import Hobbies from "../../pages/Hobbies.js";
import Contact from "../../pages/Contact.js";

function App() {
  return (
    <div className="App">
      <header className="App__header">
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
              <NavLink className="NavLink" to="/hobbies">
                Hobbies
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
          <Route path="/contact">
            <Contact />
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
