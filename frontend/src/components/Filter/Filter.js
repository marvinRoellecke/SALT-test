export default function Filter({ onFilter }) {
  return (
    <section>
      <h2>filter</h2>
      <label htmlFor="filter">Filter Bootcamp:</label>
      <select
        name="filter"
        id="filter"
        onChange={onFilter}
        className="selectBootcamp"
      >
        <option value="all">all</option>
        <option value="jsfs">jsfs</option>
        <option value="dnfs">dnfs</option>
        <option value="jfs">jfs</option>
      </select>
    </section>
  );
}
