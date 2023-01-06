export default function Form({ onSubmit }) {
  return (
    <form aria-labelledby="formTitle" onSubmit={onSubmit}>
      <h2>add new developer</h2>
      <fieldset>
        <legend>developer data</legend>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" required />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" required />
        <label htmlFor="bootcamp">Select bootcamp:</label>
        <select name="bootcamp" id="bootcamp" required>
          <option value=""> -- please select -- </option>
          <option value="jsfs">jsfs</option>
          <option value="dnfs">dnfs</option>
          <option value="jfs">jfs</option>
        </select>
      </fieldset>
      <button type="submit">Add Developer</button>
    </form>
  );
}
