import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const BelAudio = () => {
  const clothes = [
    { id: 1, categorie: "Pants", model: ["Joggin", "Jean", "Cargo"] },
    {
      id: 2,
      categorie: "T-Shirts",
      model: ["v-Neck", "Regular Fit", "test"],
      size: ["small", "medium"],
    },
    { id: 3, categorie: "Trainers", model: ["Tennis", "Basquet"] },
  ];

  const [categorie, setCategorie] = useState("");
  const [model, setModel] = useState("");
  const [size, setSize] = useState("");
  const [clothe, setClothe] = useState(clothes);

  function addCategorie() {
    const lastId = clothes.slice(-1);
    const newCategorie = {
      id: lastId[0].id + 1,
      categorie: categorie,
      model: model,
      size: size,
    };
    const newClothes = clothes.push(newCategorie);
    setClothe(clothes);
    console.log("clothe: ", JSON.stringify(clothe));
  }

  return (
    <div className="search-params">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="col-6">
              {clothes.map((clothes, index) => (
                <div key={index}>
                  <h3 className="titleCategorie">
                    Categorie: <small>{clothes.categorie}</small>
                  </h3>
                  {clothes.model.map((model, index) => (
                    <div className="tabCategorie" key={index}>
                      <h4>Model: {model}</h4>
                      {clothes.size
                        ? clothes.size.map((size, index) => (
                            <div className="tabCategorie" key={index}>
                              <h5>Size: {size}</h5>
                            </div>
                          ))
                        : null}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Col>
          <Col xs={6}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addCategorie();
              }}
            >
              <label htmlFor="categorie">
                Categorie
                <input
                  id="categorie"
                  value={categorie}
                  placeholder="categorie"
                  onChange={(e) => setCategorie(e.target.value)}
                />
              </label>
              <label htmlFor="model">
                Model
                <input
                  id="model"
                  value={model}
                  placeholder="model"
                  onChange={(e) => setModel(e.target.value)}
                />
              </label>
              <label htmlFor="size">
                Size
                <input
                  id="size"
                  value={size}
                  placeholder="size"
                  onChange={(e) => setSize(e.target.value)}
                />
              </label>
              <button>Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BelAudio;
