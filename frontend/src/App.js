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

  async function handleAddDeveloper(newDeveloper) {
    await fetch("http://localhost:3001/bootcamps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDeveloper),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target.elements;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const bootcamp = form.bootcamp.value;

    const newDeveloper = {
      firstName: firstName,
      lastName: lastName,
      bootcamp: bootcamp,
    };

    //event.target.reset();
    form.firstName.focus();
    console.log(newDeveloper);
    //handleAddDeveloper(newDeveloper);

    //event.target.reset();
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
