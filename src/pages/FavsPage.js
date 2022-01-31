import CharactersList from "../domain/Character/CharactersList.js";

export default function AboutPage() {
  return (
    <div className="App__Page App__ResourcesPage">
      <h1 className="App__Page__Head">Your Favorite Characters</h1>
      <CharactersList />
    </div>
  );
}
