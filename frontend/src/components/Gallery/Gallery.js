import CardSection from "../CardSection/CardSection";

export default function Gallery({ bootcampsData, filter }) {
  return (
    <section>
      <h2>Gallery</h2>
      {bootcampsData
        ?.filter((entry) => {
          if (filter === "all") {
            return bootcampsData;
          } else {
            return entry.bootcamp === filter;
          }
        })
        .map((entry) => {
          return (
            <article key={entry.bootcamp}>
              <h3>{entry.bootcamp}</h3>
              <CardSection people={entry.instructors} title="Instructors:" />
              <CardSection people={entry.developers} title="Developers:" />
            </article>
          );
        })}
    </section>
  );
}

/*
 */
