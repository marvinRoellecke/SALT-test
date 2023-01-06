import CardSection from "../CardSection/CardSection";

export default function Gallery({ bootcampsData }) {
  console.log(bootcampsData);
  return (
    <section>
      <h2>Gallery</h2>
      {bootcampsData?.map((entry) => {
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
