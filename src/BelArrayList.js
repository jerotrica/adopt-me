import { useState } from "react";

const initialList = [
  {
    id: 1,
    name: "Pants",
  },
  {
    id: 2,
    name: "Shorts",
  },
];

const BelArrayList = () => {
  const [list, setList] = useState(initialList);
  const [item, setItem] = useState("");

  const handleAdd = () => {
    if (list.length) {
      const lastId = list.slice(-1);
      let id = lastId[0].id + 1;
      const newList = list.concat({ name: item, id: id });
      setList(newList);
      setItem("");
    } else {
      const newList = list.concat({ name: item, id: 1 });
      setList(newList);
      setItem("");
    }
  };

  const handleRemove = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div>
        <h4>Add Item to list</h4>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>
          Add Item
        </button>
      </div>
      <br />
      <br />
      <h3>Clothes list</h3>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            name: {item.name}
            &emsp; id: {item.id}
            &emsp;
            <button type="button" onClick={() => handleRemove(item.id)}>
              Remove Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BelArrayList;
