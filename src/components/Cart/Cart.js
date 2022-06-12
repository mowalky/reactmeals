import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes.item}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.0 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.34</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;