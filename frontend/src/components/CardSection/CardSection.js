import ListEntry from "../ListEntry/ListEntry";

export default function CardSection({
  people,
  title,
  bootcamp,
  onDeleteDeveloper,
  className,
}) {
  return (
    <>
      <h4>{title}</h4>
      <ul className={className}>
        {people.map((person) => (
          <ListEntry
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
