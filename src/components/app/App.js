import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage.js";
// import AboutPage from "../../pages/AboutPage.js";
import FavsPage from "../../pages/FavsPage.js";
import CharactersPage from "../../pages/CharactersPage.js";
import CharacterPage from "../../pages/CharacterPage.js";

import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/characters/:id" component={CharacterPage} />
          <Route path="/characters" component={CharactersPage} />
          <Route path="/favs" component={FavsPage} />
          {/* <Route path="/about" component={AboutPage} /> */}
          <Route path="*">
            <h2>404 - Sorry, my friend of horror, but this page could not be found!</h2>
          </Route>
        </Switch>
      </main>
      <footer>
        <div>Made with horror by Christian Daum</div>
      </footer>
    </div>
  );
}

export default App;
