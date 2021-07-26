import CharactersList from "../domain/Character/CharactersList.js";

export default function CharactersPage() {
  return (
    <div className="App__Page App__ResourcesPage">
      <h1 className="App__Page__Head">Rick 'n Morty Characters</h1>
      <CharactersList />
    </div>
  );
}
