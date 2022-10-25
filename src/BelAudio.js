const list = [
  {
    name: "Ropa",
    categories: [
      {
        name: "Pantalones",
        categories: [
          {
            name: "Bermudas",
          },
        ],
      },
      {
        name: "Remeras",
        categories: [
          {
            name: "Largas",
          },
        ],
      },
    ],
  },
  {
    name: "Frutas",
    categories: [
      {
        name: "Rojas",
        categories: [
          {
            name: "Frambuesa",
          },
        ],
      },
      {
        name: "Verduras",
        categories: [
          {
            name: "Largas",
          },
        ],
      },
    ],
  },
];

const Categories = () => {
  return null;
  //   return (
  //     <div>
  //       {list.map((item, index) => (
  // s
  //          <Categories key={index} categories={item.categories} />
  //       ))}
  //     </div>
  //   );
};

export default Categories;
