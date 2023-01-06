import "./App.css";

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
        <form aria-labelledby="formTitle" onSubmit={handleSubmit}>
          <h2>add new developer</h2>
          <fieldset>
            <legend>developer data</legend>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" required />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" required />
            <label htmlFor="bootcamp">Select bootcamp:</label>
            <select name="bootcamp" id="bootcamp" required>
              <option value="all">all</option>
              <option value="jsfs">jsfs</option>
              <option value="dnfs">dnfs</option>
              <option value="jfs">jfs</option>
            </select>
          </fieldset>
          <button type="submit">Add Developer</button>
        </form>
        <section>gallery</section>
      </main>
      <footer>(c) 2023 </footer>
    </>
  );
}

export default App;
