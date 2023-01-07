import "./App.css";
import Form from "./components/Form/Form";
import Gallery from "./components/Gallery/Gallery";
import Filter from "./components/Filter/Filter";
import { useEffect, useState } from "react";
import useFetch from "./helpers/fetch";

function App() {
  //const data = useFetch("http://localhost:3001/bootcamps");
  //const [data, setData] = useState();
  const [bootcampsData, setBootcampsData] = useState();
  const [filter, setFilter] = useState("all");

  async function getData() {
    try {
      const response = await fetch("http://localhost:3001/bootcamps");
      const data = await response.json();
      setBootcampsData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  /*   useEffect(() => {
    setBootcampsData(data);
  }, [data]); */

  async function handleAddDeveloper(newDeveloper) {
    await fetch("http://localhost:3001/bootcamps/" + newDeveloper.bootcamp, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDeveloper),
    });
    getData();
  }

  async function handleDeleteDeveloper(bootcamp, id) {
    await fetch(
      `http://localhost:3001/bootcamps/${bootcamp}/developers/${id}`,
      {
        method: "DELETE",
      }
    );
    getData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target.elements;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const bootcamp = form.bootcamp.value;

    const newDeveloper = {
      bootcamp: bootcamp,
      name: firstName + " " + lastName,
    };

    handleAddDeveloper(newDeveloper);
    form.firstName.focus();
    event.target.reset();
  }

  function handleFilter(event) {
    event.preventDefault();
    const filterValue = event.target.value;
    setFilter(filterValue);
  }

  return (
    <>
      <header>
        <h1 id="formTitle">Dev Track</h1>
      </header>
      <main>
        <Form onSubmit={handleSubmit} />
        <Filter onFilter={handleFilter} />
        <Gallery
          bootcampsData={bootcampsData}
          filter={filter}
          onDeleteDeveloper={handleDeleteDeveloper}
        />
      </main>
      <footer>(c) 2023 </footer>
    </>
  );
}

export default App;
