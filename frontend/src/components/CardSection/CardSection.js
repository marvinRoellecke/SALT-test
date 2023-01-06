export default function CardSection({ people, title }) {
  return (
    <section>
      <h4>{title}</h4>
      <ul>
        {people.map((guy) => (
          <li key={guy.id}>{guy.name}</li>
        ))}
      </ul>
    </section>
  );
}
