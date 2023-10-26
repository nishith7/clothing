import { Routes, Route } from "react-router-dom";
import AllProductsPage from "../components/AllProductsPage";
import Home from "../components/Home";

export default function Router(params) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProductsPage  />} />
      </Routes>
    </>
  );
}
