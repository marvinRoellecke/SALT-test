import CardSection from "../CardSection/CardSection";

export default function Gallery({ bootcampsData, filter, onDeleteDeveloper }) {
  return (
    <section className="gallery">
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
            <article key={entry.bootcamp} className="--dev">
              <h3>{entry.bootcamp}</h3>
              <CardSection people={entry.instructors} title="Instructors:" />
              <CardSection
                people={entry.developers}
                title="Developers:"
                bootcamp={entry.bootcamp}
                onDeleteDeveloper={onDeleteDeveloper}
              />
            </article>
          );
        })}
    </section>
  );
}

/*
 */
