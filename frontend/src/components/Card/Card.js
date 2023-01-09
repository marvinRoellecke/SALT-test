import Item from "../Item/Item";

export default function Card({
  group,
  title,
  bootcamp,
  onDeleteDeveloper,
  className,
}) {
  return (
    <>
      <h4>{title}</h4>
      <ul className={className}>
        {group.map((person) => (
          <Item
            key={person.id}
            person={person}
            bootcamp={bootcamp}
            onDeleteDeveloper={onDeleteDeveloper}
            title={title}
          />
        ))}
      </ul>
    </>
  );
}
