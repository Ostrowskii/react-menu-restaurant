import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../components/home/home";
import Menu from "../components/menu/menu";
import Order from "../components/order/order";
import AdmHome from "../components/admin/admHome";
import AdmMenu from "../components/admin/admMenu";
import AdmOrders from "../components/admin/admOrders";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
        <Route path="admHome" element={<AdmHome />} />
        <Route path="admMenu" element={<AdmMenu />} />
        <Route path="admOrders" element={<AdmOrders />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
