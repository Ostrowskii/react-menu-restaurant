import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../components/home/home";
import Menu from "../components/menu/menu";
import Order from "../components/order/order";
import Admin from "../components/admin/admin";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
