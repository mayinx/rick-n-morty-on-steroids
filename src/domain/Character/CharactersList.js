import "./CharactersList.css";
import { useEffect, useState } from "react";
import Character from "./Character.js";
import { useScrollHandler } from "../../hooks/useScrollHandler.js";

export default function CharacterList() {
  const pluralize = require("pluralize");

  const [resources, setResources] = useState([]);
  const [resourcesCount, setResourcesCount] = useState(0);
  const [totalPages, setTotalPages] = useState();
  // const [page, setPage] = useState(1);
  const [filterObject, setFilterObject] = useState({
    status: "",
    species: "",
    name: "",
    page: 1,
  });

  const [reloadDataSet, setReloadDataSet] = useState(true);

  // const [apiUrl, setApiUrl] = useState("");
  const apiBaseUri = "https://rickandmortyapi.com/api/character";

  // TODO: Refactor into custom hook 'useApiUrlCompiler' or similar
  function compileApiUri(baseUrl, filterObject) {
    let apiFilterParams = new URLSearchParams({});

    Object.entries(filterObject).forEach((filter) => {
      console.log("filter", filter);
      if (filter && filter[1]) {
        console.log("yo - filter thaat by: ", filter[0], filter[1]);
        apiFilterParams.append(filter[0], filter[1]);
      }
    });

    return apiFilterParams.toString() ? baseUrl + "/?" + apiFilterParams.toString() : baseUrl;
  }

  useEffect(() => {
    fetch(compileApiUri(apiBaseUri, filterObject))
      .then((res) => res.json())
      .then((data) => {
        setResources((prevResources) => {
          if (reloadDataSet) {
            setReloadDataSet(false);
            return data?.results || [];
          } else {
            return [...prevResources, ...(data?.results || [])];
          }
        });
        setTotalPages(data?.info?.pages || 1);
        setResourcesCount(data?.info?.count || 0);
      })
      .catch((error) => console.log(error));
  }, [filterObject]);

  function renderResources() {
    return resources.map((character, idx) => {
      return <Character key={idx} character={character} as="ListItem" />;
    });
  }

  function handleLoadMore() {
    if (filterObject.page < totalPages) {
      setFilterObject({ ...filterObject, page: filterObject.page + 1 });
    }
  }

  // Custom Hook to determine if the filer bar should be sticky or not
  // const scroll = useScrollHandler(50, document.querySelector("main"));
  const scroll = useScrollHandler(50, "scrollTop", document.querySelector("main"));

  const filterBarClass = `ResourcesList__FilterBar CharactersList__FilterBar ${
    scroll && "FilterBarSticky"
  }`;

  // uh - ah
  function handleFilterInputChange(e) {
    // console.log("fired filter + val:", e.target.name, e.target.value);
    setFilterObject({
      ...filterObject,
      [e.target.name]: e.target.value,
      page: 1,
    });

    setReloadDataSet(true);
  }

  // TODO: Extract ResourcesFilterBar-Component
  return (
    <section className="ResourcesList CharactersList">
      <div className={filterBarClass}>
        <div className="ListItemsCount">{pluralize("Character", Number(resourcesCount), true)}</div>
        <div className="ListFilterOptions">
          <select
            id="status-filter"
            className="character-filter form-control"
            name="status"
            onChange={handleFilterInputChange}
          >
            <option select value="">
              -- all statuses --
            </option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
          <select
            id="species-filter"
            className="character-filter form-control"
            name="species"
            onChange={handleFilterInputChange}
          >
            <option select value="">
              -- all species --
            </option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
          <input
            id="name-filter"
            type="text"
            className="character-filter form-control"
            name="name"
            placeholder="Character name"
            onChange={handleFilterInputChange}
          />
        </div>
      </div>
      <div className="ResourcesList__Items CharactersList__Items">{renderResources()}</div>
      {filterObject.page < totalPages && (
        <button
          className="CharactersList__LoadMoreButton btn green rounded"
          onClick={handleLoadMore}
        >
          Load more Characters!
        </button>
      )}
    </section>
  );
}
