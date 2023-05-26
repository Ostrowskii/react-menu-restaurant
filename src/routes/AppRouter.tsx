import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../components/home/home";
import Menu from "../components/menu/menu";
import Order from "../components/order/order";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
