<<<<<<< HEAD
import { useState } from "react";
=======
import { Fragment, useEffect } from "react";
>>>>>>> 3bbf8c12980a770b1893a285acf0f97236d572b2
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
<<<<<<< HEAD
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

=======
  useEffect(() => {
    document.title = "reactmeals";
  }, []);
>>>>>>> 3bbf8c12980a770b1893a285acf0f97236d572b2
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
