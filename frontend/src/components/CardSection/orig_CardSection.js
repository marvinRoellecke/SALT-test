import ListEntry from "../ListEntry/ListEntry";

export default function CardSection({
  people,
  title,
  bootcamp,
  onDeleteDeveloper,
}) {
  return (
    <section>
      <h4>{title}</h4>
      <ul className="cardList">
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
    </section>
  );
}
