const BelAudio = () => {
  const clothes = [
    { id: 1, item: "Pants", model: ["Joggin", "Jean", "Cargo"] },
    {
      id: 2,
      item: "T-Shirts",
      model: ["v-Neck", "Regular Fit", "test"],
      size: ["small", "medium"],
    },
    { id: 3, item: "Trainers", model: ["Tennis", "Basquet"] },
  ];

  console.log(clothes[1].size);

  return (
    <div>
      {clothes.map((clothes, index) => (
        <div key={index}>
          <h2>Item: {clothes.item}</h2>
          {clothes.model.map((model, index) => (
            <div className="tabCategorie" key={index}>
              <h2>Model: {model}</h2>
              {clothes.size
                ? clothes.size.map((size, index) => (
                    <div className="tabCategorie" key={index}>
                      <h2>Size: {size}</h2>
                    </div>
                  ))
                : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BelAudio;
