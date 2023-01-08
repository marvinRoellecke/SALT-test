import "./galery.css";
import CardList from "../CardList/CardList";

export default function Gallery({ bootcampData, filter, onDeleteDeveloper }) {
  return (
    <>
      <section>
        <h2>Gallery</h2>
        <div className="gallery">
          {bootcampData
            ?.filter((entry) => {
              if (filter === "all") {
                return bootcampData;
              } else {
                return entry.bootcamp === filter;
              }
            })
            .map((entry) => {
              return (
                <article key={entry.bootcamp} className="bootcamp">
                  <h3>{entry.bootcamp}</h3>
                  <CardList
                    group={entry.instructors}
                    title="Instructors:"
                    className="cardList"
                  />
                  <CardList
                    group={entry.developers}
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
