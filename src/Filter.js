import { useEffect } from "react";

const Filter = ({ product, setFiltered, setActiveCat, activeCat }) => {
  return (
    <div className="filter-container">
      <button
        onClick={() => {
          setActiveCat("");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setActiveCat("men's clothing");
        }}
      >
        Mens
      </button>
      <button
        onClick={() => {
          setActiveCat("women's clothing");
        }}
      >
        Womens
      </button>
      <button
        onClick={() => {
          setActiveCat("electronics");
        }}
      >
        Electronics
      </button>
      <button
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
