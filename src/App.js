import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

const products = [
  {
    title: "Coombes",
    type: "Lounge",
    price: 2600,
    rating: 4,
    img: "https://i.imgur.com/ZAxMGG5.png",
    category: "furniture",
    color: "gray",
    collection: "classic",
  },
  {
    title: "Keeve Set",
    type: "Table & Chairs",
    price: 590,
    rating: 4,
    img: "https://i.imgur.com/tT8sFIs.jpeg",
    category: "furniture",
    color: "wood",
    collection: "modern",
  },
  {
    title: "Nillè",
    type: "Armchair",
    price: 950,
    rating: 5,
    img: "https://i.imgur.com/Vx1cZY0.png",
    category: "furniture",
    color: "orange",
    collection: "classic",
  },
  {
    title: "Blanko",
    type: "Side table",
    price: 90,
    rating: 4,
    img: "https://i.imgur.com/N1Bf4ox.jpg",
    category: "furniture",
    color: "white",
    collection: "modern",
  },
  {
    title: "Momo",
    type: "Shelves",
    price: 890,
    rating: 4,
    img: "https://i.imgur.com/AlKxDE4.jpeg",
    category: "auxiliars",
    color: "wood",
    collection: "classic",
  },
  {
    title: "Penemillè",
    type: "Chair",
    price: 120,
    rating: 4,
    img: "https://i.imgur.com/pmANPjN.jpeg",
    category: "furniture",
    color: "white",
    collection: "modern",
  },
  {
    title: "Kappu",
    type: "Shelves",
    price: 420,
    rating: 4,
    img: "https://i.imgur.com/s2rsPa1.jpg",
    category: "auxiliars",
    color: "wood",
    collection: "classic",
  },
];

const App = () => {
  const [filteredList, setFilteredList] = useState(products);
  const [clearFilter, setClearFilter] = useState("");

  const filterCards = (searchValue) => {
    !searchValue
      ? setClearFilter(products)
      : setFilteredList(
          [...products].filter(
            (product) =>
              product.title.toLowerCase().includes(searchValue) ||
              product.type.toLowerCase().includes(searchValue)
          )
        );
    console.log(filteredList);
  };

  return (
    <main>
      <section className="search__section">
        <SearchBar filterCards={filterCards} />
      </section>
      <section className="products__section">
        {filteredList.map((product, i) => {
          return (
            <Card
              key={`idCard-${i}`}
              thumbnail={product.img}
              price={product.price}
              rating={product.rating}
              type={product.type}
              title={product.title}
            ></Card>
          );
        })}
      </section>
    </main>
  );
};

export default App;
