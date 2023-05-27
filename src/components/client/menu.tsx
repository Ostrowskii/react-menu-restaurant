import ClientLowerMenu from "../shared/clientLowerMenu";

function Menu() {
  const menuItems = [
    { id: 1, name: "Salada vegetariana", price: 5.99 },
    { id: 2, name: "Hambúrguer com queijo", price: 7.99 },
    { id: 3, name: "Pizza de margherita", price: 9.99 },
  ];

  return (
    <>
      <h1>menu</h1>
      <ul className="list-group">
        {menuItems.map((item) => (
          <li className="list-group-item" key={item.id}>
            <div className="row">
              <div className="col-3">
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id={`quantityInput-${item.id}`}
                />
              </div>
              <div className="col-2">
                <label htmlFor={`quantityInput-${item.id}`}>{item.price}</label>
              </div>
              <div className="col-7">
                <label
                  className="form-check-label"
                  htmlFor={`quantityInput-${item.id}`}
                >
                  {item.name}
                </label>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ClientLowerMenu></ClientLowerMenu>
    </>
  );
}
export default Menu;
