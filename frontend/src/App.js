import "./App.css";
import Form from "./components/Form/Form";
import Gallery from "./components/Gallery/Gallery";
import Filter from "./components/Filter/Filter";
import { useEffect, useState } from "react";
import useFetch from "./helpers/fetch";

function App() {
  const bootcampData = useFetch("http://localhost:3001/bootcamps");
  const [bootcampsData, setBootcampsData] = useState();

  useEffect(() => {
    setBootcampsData(bootcampData);
  }, [bootcampData]);

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }

  function handleFilter(event) {
    event.preventDefault();
    const filter = event.target.value;

    if (filter === "all") {
      setBootcampsData(bootcampData);
    } else {
      setBootcampsData(
        bootcampData.filter((entry) => {
          return entry.bootcamp === filter;
        })
      );
    }
  }

  return (
    <>
      <header>
        <h1 id="formTitle">Dev Track</h1>
      </header>
      <main>
        <Form onSubmit={handleSubmit} />
        <Filter onFilter={handleFilter} />
        <Gallery bootcampsData={bootcampsData} />
      </main>
      <footer>(c) 2023 </footer>
    </>
  );
}

export default App;
