import "./App.css";
import Form from "./components/Form/Form";

function App() {
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
        <section>
          <h2>Gallery</h2>
        </section>
      </main>
      <footer>(c) 2023 </footer>
    </>
  );
}

export default App;
