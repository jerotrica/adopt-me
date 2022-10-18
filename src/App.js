import { render } from "react-dom";

import Bel from "./Bel";
//import SearchParams from "./SearchParams";
const App = () => {
  return (
    <div id="my-app">
      <h1>Adopt Me!</h1>
      <Bel />
    </div>
  );
};

render(<App />, document.getElementById("root"));
