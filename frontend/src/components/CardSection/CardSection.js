import ListEntry from "../ListEntry/ListEntry";

export default function CardSection({
  people,
  title,
  bootcamp,
  onDeleteDeveloper,
}) {
  return (
    <>
      <h4>{title}</h4>
      {people.map((person) => (
        <ListEntry
          key={person.id}
          person={person}
          bootcamp={bootcamp}
          onDeleteDeveloper={onDeleteDeveloper}
          title={title}
        />
      ))}
    </>
  );
}
