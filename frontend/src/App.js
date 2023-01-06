import "./App.css";
import Form from "./components/Form/Form";
import Gallery from "./components/Gallery/Gallery";
import { useEffect, useState } from "react";

function App() {
  const [bootcampsData, setBootcampsData] = useState();

  async function startFetch() {
    try {
      const response = await fetch("http://localhost:3001/bootcamps");
      setBootcampsData(await response.json());
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    startFetch();
  }, []);

  //console.log(bootcampsData);

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }

  return (
    <>
      <header>
        <h1 id="formTitle">Dev Track</h1>
      </header>
      <main>
        <Form onSubmit={handleSubmit} />
        <section>filter</section>
        <Gallery bootcampsData={bootcampsData} />
      </main>
      <footer>(c) 2023 </footer>
    </>
  );
}

export default App;
