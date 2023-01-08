import "./galery.css";
import CardSection from "../CardSection/CardSection";

export default function Gallery({ bootcampsData, filter, onDeleteDeveloper }) {
  return (
    <>
      <section>
        <h2>Gallery</h2>
        <div className="gallery">
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
                <article key={entry.bootcamp} className="bootcamp">
                  <h3>{entry.bootcamp}</h3>
                  <CardSection
                    people={entry.instructors}
                    title="Instructors:"
                    className="cardList"
                  />
                  <CardSection
                    people={entry.developers}
                    title="Developers:"
                    bootcamp={entry.bootcamp}
                    onDeleteDeveloper={onDeleteDeveloper}
                    className="cardList --dev"
                  />
                </article>
              );
            })}
        </div>
      </section>
    </>
  );
}
