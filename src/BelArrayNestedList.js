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
    brands: [],
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
  const [newCategorie, setNewCategorie] = useState("");

  const handleAdd = () => {
    var elementPos = list
      .map(function (x) {
        return x.id;
      })
      .indexOf(+categorie);

    list[elementPos].brands.push(item);
    const newList = Object.assign([], list);
    setList(newList);
    //aca no entiendo por que no puedo poner el SETLIST.
  };

  const handleAddCategorie = () => {
    if (list.length) {
      const lastId = list.slice(-1);
      const newArrayItem = {
        id: lastId[0].id + 1,
        name: newCategorie,
        brands: [],
      };
      list.push(newArrayItem);
      setNewCategorie("");
    } else {
      const newArrayItem = {
        id: 1,
        name: newCategorie,
        brands: [],
      };
      list.push(newArrayItem);
      setNewCategorie("");
    }
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
                  <br />
                  {item.brands ? (
                    <ul>
                      {item.brands.map((brand, index) => (
                        <li key={index}>{brand}</li>
                      ))}
                    </ul>
                  ) : null}
                  <br />
                  <button
                    className="btn btn-outline-danger btn-sm"
                    type="button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove Item
                  </button>
                  <br /> <br />
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
                  Add Brand Avaible
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
                    <option hidden selected />
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
                  Add Brand
                </button>
              </div>
            </form>
            <br />
            <h5>Add new Categorie</h5>
            <input
              id="newCategorie"
              value={newCategorie}
              onChange={(e) => setNewCategorie(e.target.value)}
            />
            <br />
            <br />
            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => handleAddCategorie(newCategorie)}
            >
              Add Categorie
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BelArrayNestedList;
