import { useState } from "react";

export default function ListEntry({ title, guy, onDeleteDeveloper, bootcamp }) {
  const [toggle, setToggle] = useState(false);
  return (
    <li onClick={() => setToggle(!toggle)}>
      {guy.name}
      {title === "Developers:" && toggle && (
        <button
          type="button"
          onClick={() => {
            onDeleteDeveloper(bootcamp, guy.id);
          }}
        >
          delete
        </button>
      )}
    </li>
  );
}
