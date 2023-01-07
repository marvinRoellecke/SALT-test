import { useState } from "react";

export default function ListEntry({
  title,
  person,
  onDeleteDeveloper,
  bootcamp,
}) {
  const [toggle, setToggle] = useState(false);
  return (
    <p>
      {title === "Developers:" ? (
        <button
          type="button"
          onClick={() => setToggle(!toggle)}
          className="card toggled"
        >
          {person.name}
        </button>
      ) : (
        <span>{person.name} </span>
      )}

      {title === "Developers:" && toggle && (
        <button
          type="button"
          className="deleteBtn"
          onClick={() => {
            onDeleteDeveloper(bootcamp, person.id);
          }}
        >
          delete
        </button>
      )}
    </p>
  );
}
