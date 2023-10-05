export function Filter({ changeFilter }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={changeFilter} />
    </>
  );
}
