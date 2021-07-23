import "./CharactersList.css";
import { useEffect, useState } from "react";
import Character from "./Character.js";

export default function CharacterList() {
  const [resources, setResources] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResources((prevResources) => {
          return [...prevResources, ...data.results];
        });
        setTotalPages(data.info.pages);
      });
  }, [page]);

  function renderResources() {
    return resources.map((character) => {
      return <Character character={character} as="ListItem" />;
    });
  }

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <>
      <div className="ResourcesList__FilterBar CharactersList__FilterBar d-flex-column">
        <div class="d-flex-row">
          <select
            id="character-live-status-filter"
            class="character-filter form-control"
            name="status"
          >
            <option select value="">
              -- all statuses --
            </option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
          <select
            id="character-live-species-filter"
            class="character-filter form-control"
            name="species"
          >
            <option select value="">
              -- all species --
            </option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
        </div>
        <input
          type="text"
          id="character-live-search"
          class="character-filter form-control"
          name="name"
          placeholder="Character name"
        />
      </div>
      <div className="ResourcesList CharactersList">{renderResources()}</div>
      {page < totalPages && (
        <button onClick={handleLoadMore}>Load more </button>
      )}
    </>
  );
}
