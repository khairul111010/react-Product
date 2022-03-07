import "./App.css";
import { useState, useEffect } from "react";
import Product from "./Product";
import Filter from "./Filter";
function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await (
      await fetch("https://fakestoreapi.com/products")
    ).json();
    // const movie = await data.json();
    // console.log(data);
    setProducts(data);
  };
  return (
    <div className="App">
      <div className="products">
        <Filter
          product={products}
          setFiltered={setFiltered}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <div className="popular-products">
          {products.map((p) => {
            return <Product key={p.id} product={p} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
