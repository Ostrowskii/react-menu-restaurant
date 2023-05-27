import { Link, useNavigate } from "react-router-dom";

import HomeSvg from "../../assets/home.svg";
import MenuSvg from "../../assets/menu.svg";
import OrderSvg from "../../assets/order.svg";

function ClientLowerMenu() {
  const buttonleft = {
    height: 100,
    backgroundColor: "blue",

    "border-radius": "10px 0px 0 0",
  };
  const buttonMidle = {
    height: 100,
    backgroundColor: "blue",

    "border-radius": "0px",
  };
  const buttonRight = {
    height: 100,
    backgroundColor: "blue",

    "border-radius": "0px 10px 0 0",
  };

  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  function navigateToMenu() {
    navigate("/menu");
  }

  function navigateToOrder() {
    navigate("/order");
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
        <img src={MenuSvg} alt="menu" />
      </button>
      <button
        style={buttonRight}
        type="button"
        className="btn btn-lg"
        onClick={navigateToOrder}
      >
        <img src={OrderSvg} alt="order" />
      </button>
    </div>
  );
}
export default ClientLowerMenu;
