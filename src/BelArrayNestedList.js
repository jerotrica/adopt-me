import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
const initialList = [
  {
    id: 1,
    name: "Trousers",
    brands: [],
  },
  {
    id: 2,
    name: "T-shirt",
    brands: [],
  },
  {
    id: 3,
    name: "Sneakers",
    brands: ["Test", "TEst2"],
  },
  {
    id: 4,
    name: "Jackets",
    brands: [],
  },
];

const BelArrayNestedList = () => {
  const [list, setList] = useState(initialList);
  const [item, setItem] = useState("");
  const [categorie, setCategorie] = useState("");

  const handleAdd = () => {
    list[categorie - 1].brands.push(item);
    //aca no entiendo por que no puedo poner el SETLIST.
  };

  const handleRemove = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="">
      <Container>
        <Row>
          <Col xs={6}>
            <h3>Clothes list</h3>
            <ul>
              {list.map((item) => (
                <li key={item.id}>
                  {item.name}
                  &emsp; id: {item.id}
                  &emsp;
                  <br />
                  {item.brands ? (
                    <ul>
                      {item.brands.map((brand, index) => (
                        <li key={index}>{brand}</li>
                      ))}
                    </ul>
                  ) : null}
                  <button
                    className="btn btn-outline-danger btn-sm"
                    type="button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove Item
                  </button>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={6}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAdd();
              }}
            >
              <div>
                <label htmlFor="item">
                  Add Item to list
                  <input
                    id="item"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                  />
                </label>
                <label>
                  Add to which categorie
                  <br />
                  <select
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                  >
                    {list.length ? (
                      list.map((list) => (
                        <option key={list.id} value={list.id}>
                          {list.name}
                        </option>
                      ))
                    ) : (
                      <option>No option Avaible</option>
                    )}
                  </select>
                </label>
                <br />
                <br />
                <button className="btn btn-outline-success btn-sm">
                  Add Item
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BelArrayNestedList;
