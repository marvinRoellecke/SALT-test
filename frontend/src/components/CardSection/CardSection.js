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
          <li key={guy.id}>
            {guy.name}
            {title === "Developers:" && (
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
        ))}
      </ul>
    </section>
  );
}
