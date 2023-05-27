//components
import AdminLowerMenu from "../shared/adminLowerMenu";
//routes
import { useNavigate } from "react-router-dom";

//img
import EditSvg from "../../assets/edit.svg";
import DeleteSvg from "../../assets/delete.svg";
import CreateSvg from "../../assets/create.svg";
function AdmMenu() {
  const items = [
    { id: 1, name: "Espaguete à bolonhesa", price: 7.99, description: "food" },
    {
      id: 2,
      name: "Frango ao curry com arroz",
      price: 6.99,
      description: "food",
    },
    {
      id: 3,
      name: "Salada Caesar com frango grelhado",
      price: 4.99,
      description: "food",
    },
    {
      id: 4,
      name: "Tacos mexicanos com guacamole e salsa",
      price: 5.99,
      description: "food",
    },
    {
      id: 5,
      name: "Bife de filé com molho de pimenta",
      price: 9.99,
      description: "food",
    },
  ];
  const navigate = useNavigate();
  function navigateToEdit() {
    navigate("/admEdit");
  }
  //trabalhar aqui
  function navigateToDelete() {}
  function navigateToCreate() {}
  return (
    <>
      <h1>Menu admin</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            <div className="row">
              <div className="col-2 d-flex align-items-center">
                ${item.price}
              </div>
              <div className="col-6 d-flex align-items-center">{item.name}</div>
              <div className="col-2">
                <button type="button" className="btn" onClick={navigateToEdit}>
                  <img src={EditSvg} alt="edit button" />
                </button>
              </div>
              <div className="col-2">
                <button
                  type="button"
                  className="btn"
                  onClick={navigateToDelete}
                >
                  <img src={DeleteSvg} alt="delete button" />
                </button>
              </div>
            </div>
          </li>
        ))}
        <li className="text-center">
          <button type="button" className="btn" onClick={navigateToCreate}>
            <img src={CreateSvg} alt="create a new item button" />
          </button>
        </li>
      </ul>
      <AdminLowerMenu></AdminLowerMenu>
    </>
  );
}
export default AdmMenu;
