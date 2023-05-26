import { Link, useNavigate } from "react-router-dom";

import HomeSvg from "../../assets/home.svg";
import MenuSvg from "../../assets/menu.svg";
import OrderSvg from "../../assets/order.svg";

function LowerMenu() {
  // function AcessHome() {
  //   const navigate = useNavigate();
  //   navigate("/");
  // }
  function AcessMenu() {
    const navigate = useNavigate();
    navigate("/menu");
  }

  return (
    <div
      className="btn-group d-flex justify-content-end fixed-bottom"
      role="group"
      aria-label="Basic example"
    >
      <Link to="/">
        <button type="button" className="btn btn-primary btn-lg">
          <img src={HomeSvg} alt="home" />
        </button>
      </Link>
      <Link to="/menu">
        <button type="button" className="btn btn-primary btn-lg">
          <img src={MenuSvg} alt="menu" />
        </button>
      </Link>
      <Link to="/order">
        <button type="button" className="btn btn-primary btn-lg">
          <img src={OrderSvg} alt="order" />
        </button>
      </Link>
    </div>
  );
}
export default LowerMenu;
