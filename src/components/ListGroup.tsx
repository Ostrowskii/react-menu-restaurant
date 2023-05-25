function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  const getMessage = (name: string) => {
    return items.length === 0 ? <p>No item found, sra {name}</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage("ostrowski")}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
