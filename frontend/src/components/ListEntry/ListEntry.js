import { useState } from "react";

export default function ListEntry({
  title,
  person,
  onDeleteDeveloper,
  bootcamp,
}) {
  const [toggle, setToggle] = useState(false);
  return (
    <li>
      {title === "Developers:" ? (
        <button type="button" onClick={() => setToggle(!toggle)}>
          {person.name}
        </button>
      ) : (
        <span>{person.name} </span>
      )}

      {title === "Developers:" && toggle && (
        <button
          type="button"
          onClick={() => {
            onDeleteDeveloper(bootcamp, person.id);
          }}
        >
          delete
        </button>
      )}
    </li>
  );
}
