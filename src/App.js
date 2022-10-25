import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import Bel from "./Bel";
import { StrictMode } from "react/cjs/react.production.min";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
          <Link to="/bel" className="belusa">
            Belusa
          </Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
          <Route path="/bel" element={<Bel />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
