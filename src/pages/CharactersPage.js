import CharactersList from "../domain/Character/ChracterList.js";

export default function CharactersPage() {
  return (
    <div className="App__Page App__ResourcesPage">
      <h1>Rick 'n Morty Characters</h1>
      <CharactersList />
    </div>
  );
}
