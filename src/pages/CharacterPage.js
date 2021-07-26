import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Character from "../domain/Character/Character.js";

export default function CharacterPage() {
  const params = useParams();
  const [resource, setResource] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log("CharacterPage");
  console.log("params", params);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    console.log("url", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setResource(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <div className="App__Page App__ResourcePage">
      <h1 className="App__Page__Head">Character Details</h1>
      {console.log("resource", resource)}
      {isLoading || !resource ? (
        <div className="mt-2 fs-1_5">
          Holy bullcrap! Can't load that character!
        </div>
      ) : (
        <Character character={resource} />
      )}
    </div>
  );
}
