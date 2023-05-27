import { Link, useNavigate } from "react-router-dom";

import HomeSvg from "../../assets/home.svg";
import EditSvg from "../../assets/adminEdit.svg";
import OrderSvg from "../../assets/order.svg";

function AdminLowerMenu() {
  const buttonleft = {
    height: 100,
    backgroundColor: "green",

    "border-radius": "10px 0px 0 0",
  };
  const buttonMidle = {
    height: 100,
    backgroundColor: "green",

    "border-radius": "0px",
  };
  const buttonRight = {
    height: 100,
    backgroundColor: "green",

    "border-radius": "0px 10px 0 0",
  };

  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/admHome");
  }

  function navigateToMenu() {
    navigate("/admMenu");
  }

  function navigateToOrders() {
    navigate("/admOrders");
  }
  return (
    <div
      className="btn-group d-flex justify-content-end fixed-bottom"
      role="group"
      aria-label="Basic example"
    >
      <button
        style={buttonleft}
        type="button"
        className="btn btn-lg custom-height"
        onClick={navigateToHome}
      >
        <img src={HomeSvg} alt="home" />
      </button>
      <button
        style={buttonMidle}
        type="button"
        className="btn btn-lg"
        onClick={navigateToMenu}
      >
        <img src={EditSvg} alt="menu" />
      </button>
      <button
        style={buttonRight}
        type="button"
        className="btn btn-lg"
        onClick={navigateToOrders}
      >
        <img src={OrderSvg} alt="order" />
      </button>
    </div>
  );
}
export default AdminLowerMenu;
