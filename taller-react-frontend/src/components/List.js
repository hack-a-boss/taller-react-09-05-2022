import { memo } from "react";

export const List = memo(({ people, selectPerson }) => {
  if (people.length === 0) return <p>No results</p>;
  return (
    <menu>
      {people.map((person) => {
        return (
          <li
            key={person.id}
            onClick={() => {
              selectPerson(person.id);
            }}
          >
            {person.name}
          </li>
        );
      })}
    </menu>
  );
});
