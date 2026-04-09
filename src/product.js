import { useState } from "react";
import Data from "./data";
import { IoMdStar } from "react-icons/io";

function Product() {
  const [product, setProduct] = useState(Data);
  const [counts, setCounts] = useState(
    Data.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );
  const [selectedCategory, setSelectedCategory] = useState("ALL GROCERYS");

  function handleChange(category) {
    setSelectedCategory(category);
    if (category === "ALL GROCERYS") {
      setProduct(Data);
    } else {
      const filtered = Data.filter((i) => i.category === category);
      setProduct(filtered);
    }
  }

  const handleDecrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.max(prev[id] - 1, 0) }));
  };

  const handleIncrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.min(prev[id] + 1, 10) }));
  };

  const filteredCategories = [
    "ALL GROCERYS",
    "LOW CAST GROCERYS",
    "HIGH CAST GROCERYS",
    "AVERAGE CAST GROCERYS",
  ];

  return (
    <section className="section shell" id="products">
      <div className="section-head">
        <p className="eyebrow">Catalog</p>
        <h2>Pick Your Daily Grocery Favorites</h2>
      </div>

      <div className="category-row">
        <div className="chip-group">
          {filteredCategories.map((category) => (
            <button
              className={`chip ${
                selectedCategory === category ? "chip-active" : ""
              }`}
              onClick={() => handleChange(category)}
              key={category}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <p className="result-count">{product.length} items available</p>
      </div>

      <div className="catalog-grid">
          {product.map((item) => (
            <article className="catalog-card" key={item.id}>
              <img className="catalog-image" src={item.Image} alt={item.fname} />
              <div className="catalog-body">
                <h3>{item.fname}</h3>
                <p className="rating mini-rating">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </p>
                <p className="price">{item.price}</p>
                <div className="qty-control">
                  <button type="button" onClick={() => handleDecrement(item.id)}>
                    -
                  </button>
                  <span>{counts[item.id]}</span>
                  <button type="button" onClick={() => handleIncrement(item.id)}>
                    +
                  </button>
                </div>
                <button className="btn btn-solid card-btn" type="button">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}

export default Product;
