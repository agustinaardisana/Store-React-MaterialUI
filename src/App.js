import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";

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

  const filterCards = (e) => {
    setClearFilter(e.target.value);
    !e.target.value
      ? setFilteredList(products)
      : setFilteredList(
          [...products].filter(
            (product) =>
              product.title.toLowerCase().includes(e.target.value) ||
              product.type.toLowerCase().includes(e.target.value)
          )
        );
  };

  const filterCollection = (valueCollection) => {
    setFilteredList(
      [...products].filter((product) => product.collection === valueCollection)
    );
  };

  const filterColor = (valueColor) => {
    setFilteredList(
      [...products].filter((product) => product.color === valueColor)
    );
  };

  const filterCategory = (valueCategory) => {
    setFilteredList(
      [...products].filter((product) => product.category === valueCategory)
    );
  };

  const filterPriceRange = (valuePriceRange) => {
    setFilteredList(
      [...products].filter(
        (product) =>
          product.price >= valuePriceRange[0] &&
          product.price <= valuePriceRange[1]
      )
    );
    console.log(valuePriceRange);
  };

  const resetFilters = () => setFilteredList(products);

  return (
    <main>
      <section className="search__section">
        <SearchBar filterCards={filterCards} />
      </section>
      <section className="products__section">
        <aside>
          <Filters
            filterCollection={filterCollection}
            filterColor={filterColor}
            filterCategory={filterCategory}
            filterPriceRange={filterPriceRange}
            resetFilters={resetFilters}
          />
        </aside>
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
