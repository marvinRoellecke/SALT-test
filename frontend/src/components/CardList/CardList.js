import Card from "../Card/Card";

export default function CardList({
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
          <Card
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
