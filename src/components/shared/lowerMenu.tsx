import { Link, useNavigate } from "react-router-dom";

import HomeSvg from "../../assets/home.svg";
import MenuSvg from "../../assets/menu.svg";
import OrderSvg from "../../assets/order.svg";

function LowerMenu() {
  const navigate = useNavigate();
  // function AcessHome() {
  //   const navigate = useNavigate();
  //   navigate("/");
  // }
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
        type="button"
        className="btn btn-primary btn-lg"
        onClick={navigateToHome}
      >
        <img src={HomeSvg} alt="home" />
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={navigateToMenu}
      >
        <img src={MenuSvg} alt="menu" />
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={navigateToOrder}
      >
        <img src={OrderSvg} alt="order" />
      </button>
    </div>
  );
}
export default LowerMenu;
