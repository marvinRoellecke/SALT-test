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
      <ul>
        {people.map((guy) => (
          <ListEntry
            key={guy.id}
            guy={guy}
            bootcamp={bootcamp}
            onDeleteDeveloper={onDeleteDeveloper}
            title={title}
          />
        ))}
      </ul>
    </section>
  );
}
