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
          <NavLink className="NavLink" to="/">
            Homee44
          </NavLink>
          <NavLink className="NavLink" to="/about">
            About
          </NavLink>
          <NavLink className="NavLink" to="/hobbies">
            Hobbies
          </NavLink>
          <NavLink className="NavLink" to="/contact">
            Contact
          </NavLink>
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
      <footer>Lala</footer>
    </div>
  );
}

export default App;
