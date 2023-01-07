export default function Filter({ onFilter }) {
  return (
    <section className="selectBootcamp">
      <h2>filter</h2>
      <label htmlFor="selectBootcamp">Filter Bootcamp:</label>
      <select name="selectBootcamp" id="selectBootcamp" onChange={onFilter}>
        <option value="all">all</option>
        <option value="jsfs">jsfs</option>
        <option value="dnfs">dnfs</option>
        <option value="jfs">jfs</option>
      </select>
    </section>
  );
}
