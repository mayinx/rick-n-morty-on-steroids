import { ReactComponent as RickAndMortyLogo } from "../assets/Rick_and_Morty.svg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="App__Page App__HomePage">
      <h1>Welcome to the Rick and Morty App</h1>
      <RickAndMortyLogo className="PageLogo" />
      <h3>... developed by Chris during the neuefische bootcamp!</h3>
    </div>
  );
}
