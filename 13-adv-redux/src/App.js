import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const showCart = useSelector((state) => state.uiState.showCart);
  const cart = useSelector((state) => state.cartState);

  console.log(cart);
  let isInitial = true;

  useEffect(() => {
    if (!isInitial) {
      fetch(
        "https://react-http-request-26266-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
    } else {
      isInitial = false;
    }
  }, [cart]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
