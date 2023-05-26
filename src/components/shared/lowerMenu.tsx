import { useNavigate } from "react-router-dom";

function LowerMenu() {
  function AcessMenu() {
    const navigate = useNavigate();
    navigate("/teste");
  }
  return (
    <div
      className="btn-group d-flex justify-content-end fixed-bottom"
      role="group"
      aria-label="Basic example"
    >
      <button
        onClick={AcessMenu}
        type="button"
        className="btn btn-primary btn-lg"
      >
        <img src="../../assets/home.svg" alt="home" />
      </button>
      <button type="button" className="btn btn-primary btn-lg">
        menu
      </button>
      <button type="button" className="btn btn-primary btn-lg">
        order
      </button>
    </div>
  );
}
export default LowerMenu;
