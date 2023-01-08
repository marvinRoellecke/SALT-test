import "./App.css";
import Form from "./components/Form/Form";
import Gallery from "./components/Gallery/Gallery";
import Filter from "./components/Filter/Filter";
import { useEffect, useState } from "react";

function App() {
  const [bootcampData, setBootcampData] = useState();
  const [filter, setFilter] = useState("all");
  const [isInvalid, setIsInvalid] = useState(false);

  async function getData() {
    try {
      const response = await fetch("http://localhost:3001/bootcamps");
      const data = await response.json();
      setBootcampData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
    const firstName = form.addDeveloperFirstNameInput.value;
    const lastName = form.addDeveloperLastNameInput.value;
    const bootcamp = form.bootcamp.value;
    const newDeveloper = {
      bootcamp: bootcamp,
      name: firstName + " " + lastName,
    };

    if (firstName === "" || lastName === "") {
      setIsInvalid(true);
      setTimeout(() => {
        setIsInvalid(false);
      }, 2000);
      return;
    }

    handleAddDeveloper(newDeveloper);
    form.addDeveloperFirstNameInput.focus();
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
        {isInvalid && (
          <div className="errorMessage">Please enter first and last name</div>
        )}
        <Form onSubmit={handleSubmit} />
        <Filter onFilter={handleFilter} />
        <Gallery
          bootcampData={bootcampData}
          filter={filter}
          onDeleteDeveloper={handleDeleteDeveloper}
        />
      </main>
      <footer>
        <p>SALT test - 2023</p>
      </footer>
    </>
  );
}

export default App;
