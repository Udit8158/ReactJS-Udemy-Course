import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import "./index.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Header />

      {/* V6 react routing */}
      <Routes>
        <Route path="/" element={<Navigate replace to={"/welcome"} />} />

        {/* Nested route */}
        <Route path="/welcome/*" element={<Welcome />}>
          <Route path="new-user" element={<p>Hello new user</p>} />
        </Route>

        <Route path="/products" element={<Products />} />

        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
