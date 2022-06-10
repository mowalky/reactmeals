import { Fragment, useEffect } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  useEffect(() => {
    document.title = "reactmeals";
  }, []);
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
