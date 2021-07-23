import "./Character.css";
import { Link } from "react-router-dom";

// Frackin awesome - found that here:
// https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2
//
// QUESTION: Does that mean that JS-arrow-functions / React-Components  implicitly
// accept code blocks (here jsx) a last argument like in ruby blocks?!
// (I'm refering to the last parameter here - "children" )
//
// EDIT: Found the answer myself (same source): "...the children prop is actually a React feature.
// Each component receives an implicit prop called children that contains all the elements contained
// between the opening tag and the closing tag where it is called."
//
// That's more or less similar to Ruby Blocks, which can be passed as implicit last argument to a method...
// I thought that wasn't possible in JS - but it is, yay - which opens up a couple of interestng possibilities...
//
// TODO: Move that beauty here somewhere generic - dunno: 'src/Utils' f.i. - or iplemen it as useConditionalWrapper-custom hook or whatnot?
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default function Character({ character, as }) {
  const renderAsListItem = as && as === "ListItem";
  return (
    <section
      className={`Resource Character Character--${character.status.toLowerCase()} ${
        renderAsListItem && "Resource__ListItem Character__ListItem"
      }`}
      key={character.id}
      id={character.id}
    >
      <ConditionalWrapper
        condition={renderAsListItem}
        wrapper={(children) => (
          <Link to={`/characters/${character.id}`}>{children}</Link>
        )}
      >
        <p className="character__avatar-wrapper">
          <img src={character.image} className="Character__Avatar" alt="" />
        </p>
        <div className="character__meta">
          <h2>{character.name}</h2>
          <div>Character ID {character.id}</div>
          <div>Species: {character.species}</div>
          <div>Status: {character.status}</div>
        </div>
      </ConditionalWrapper>
    </section>
  );
}
