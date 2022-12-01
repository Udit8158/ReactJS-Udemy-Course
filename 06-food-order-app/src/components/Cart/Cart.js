import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  // Handling some states
  const [showCheckout, setShowCheckout] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completeSubmission, setCompleteSubmission] = useState(false);

  // Handling context
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  // Basic handlers

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const onOrderHandler = () => setShowCheckout(true);
  const onCancelHandler = () => setShowCheckout(false);

  const orderConformedHandler = async (userData) => {
    // Managing order in firebase
    try {
      setError(null);
      setIsSubmitting(true);
      const response = await fetch(
        "https://react-http-request-26266-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            items: cartCtx.items,
            orderValue: cartCtx.totalAmount.toFixed(2),
          }),
        }
      );

      setIsSubmitting(false);
      setCompleteSubmission(true);
      cartCtx.clearCart();
      setShowCheckout(false);

      if (!response.ok) {
        throw new Error("Some thing went wrong !!!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!showCheckout && (
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
      )}
      {!error && !isSubmitting && !completeSubmission && (
        <div className={classes.total}>
          <span>Total Price</span>
          <span>${cartCtx.totalAmount.toFixed(2)}</span>
        </div>
      )}

      {showCheckout && !error && !isSubmitting && (
        <Checkout
          onConformed={orderConformedHandler}
          onCancel={onCancelHandler}
        />
      )}

      {!error && isSubmitting && <p>Executing your order</p>}

      {error && !isSubmitting && <p>{error}</p>}

      {!error && !isSubmitting && completeSubmission && (
        <p>Your order is successfully executed.</p>
      )}

      {!showCheckout && (
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          {cartCtx.items.length > 0 && (
            <button className={classes.button} onClick={onOrderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
