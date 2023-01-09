import { useState } from "react";
import Button from "../Button/Button";

export default function Item({ title, person, onDeleteDeveloper, bootcamp }) {
  const [toggle, setToggle] = useState(false);
  return (
    <li>
      {title === "Developers:" ? (
        <Button
          type="button"
          onClick={() => setToggle(!toggle)}
          className="card toggled"
          person={person}
          content={person.name}
        />
      ) : (
        <span>{person.name} </span>
      )}

      {title === "Developers:" && toggle && (
        <Button
          type="button"
          className="deleteBtn"
          onClick={() => {
            onDeleteDeveloper(bootcamp, person.id);
          }}
          bootcamp={bootcamp}
          id={person.id}
          content="delete"
        />
      )}
    </li>
  );
}

/* <button
type="button"
onClick={() => setToggle(!toggle)}
className="card toggled"
>
{person.name}
</button> */

/* <button
type="button"
className="deleteBtn"
onClick={() => {
  onDeleteDeveloper(bootcamp, person.id);
}}
>
delete
</button> */
