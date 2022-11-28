import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  //   const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 35.99 }];
  const cartItems = cartCtx.items;

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={addCartItemHandler.bind(null, item)}
              onRemove={removeCartHandler.bind(null, item.id)}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Price</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
