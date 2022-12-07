import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import "./index.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>

        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
