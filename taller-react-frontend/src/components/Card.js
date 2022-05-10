import { memo } from "react";

export const Card = memo(({ person }) => {
  return person ? (
    <output>
      <header>
        <h2>{person.name}</h2>
        <p>
          {person.profession} from {person.country}
        </p>
      </header>

      <dl>
        <dt>Age:</dt>
        <dd>{person.age}</dd>
        <dt>Gender:</dt>
        <dd>{person.gender}</dd>
        <dt>Birthday:</dt>
        <dd>{new Date(person.birthday).toLocaleDateString()}</dd>
        <dt>Phone:</dt>
        <dd>{person.phone}</dd>
        <dt>Email:</dt>
        <dd>{person.email}</dd>
      </dl>
    </output>
  ) : (
    <p>Please selecte a person...</p>
  );
});
