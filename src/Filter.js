import { useEffect } from "react";

const Filter = ({ product, setFiltered, setActiveCat, activeCat }) => {
  useEffect(() => {
    if (activeCat === "") {
      setFiltered(product);
      return;
    }
    const filtered = product.filter((p) => {
      return p.category === activeCat;
    });
    // console.log(product);
    setFiltered(filtered);
  }, [activeCat, product, setFiltered]);

  return (
    <div className="filter-container">
      <button
        className={activeCat === "" ? "active" : ""}
        onClick={() => {
          setActiveCat("");
        }}
      >
        All
      </button>
      <button
        className={activeCat === "men's clothing" ? "active" : ""}
        onClick={() => {
          setActiveCat("men's clothing");
        }}
      >
        Mens
      </button>
      <button
        className={activeCat === "women's clothing" ? "active" : ""}
        onClick={() => {
          setActiveCat("women's clothing");
        }}
      >
        Womens
      </button>
      <button
        className={activeCat === "electronics" ? "active" : ""}
        onClick={() => {
          setActiveCat("electronics");
        }}
      >
        Electronics
      </button>
      <button
        className={activeCat === "jewelery" ? "active" : ""}
        onClick={() => {
          setActiveCat("jewelery");
        }}
      >
        Jewelry
      </button>
    </div>
  );
};

export default Filter;
