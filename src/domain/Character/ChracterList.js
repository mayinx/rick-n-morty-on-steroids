import "./CharactersList.css";
import { useEffect, useState } from "react";
import Character from "./Character.js";

export default function CharacterList() {
  const [resources, setResources] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    // const url = `https://reqres.in/api/users?page=${page}`;
    //const url = `https://reqres.in/api/users?page=${page}`;
    const url = "https://rickandmortyapi.com/api/character";
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
      <div className="ResourcesList CharactersList">{renderResources()}</div>
      {page < totalPages && (
        <button onClick={handleLoadMore}>Load more </button>
      )}
    </>
  );
}
