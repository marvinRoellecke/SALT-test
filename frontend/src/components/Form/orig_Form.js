export default function Form({ onSubmit }) {
  return (
    <form aria-labelledby="formTitle" onSubmit={onSubmit} id="addDeveloperForm">
      <h2>add new developer</h2>
      <fieldset>
        <legend>developer data</legend>
        <label htmlFor="addDeveloperFirstNameInput">First Name:</label>
        <input
          type="text"
          name="addDeveloperFirstNameInput"
          id="addDeveloperFirstNameInput"
          className="addDeveloperFirstNameInput"
          required
        />
        <label htmlFor="addDeveloperLastNameInput">Last Name:</label>
        <input
          type="text"
          name="addDeveloperLastNameInput"
          id="addDeveloperLastNameInput"
          className="addDeveloperLastNameInput"
          required
        />
        <label htmlFor="bootcamp">Select Bootcamp:</label>
        <select name="bootcamp" id="bootcamp" required>
          <option value=""> -- please select -- </option>
          <option value="jsfs">jsfs</option>
          <option value="dnfs">dnfs</option>
          <option value="jfs">jfs</option>
        </select>
      </fieldset>
      <button type="submit" className="btnAddDeveloper" id="addDeveloperBtn">
        Add Developer
      </button>
    </form>
  );
}
