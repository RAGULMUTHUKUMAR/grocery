import React from "react";
import product1 from "./images/36.png";
import product2 from "./images/1.png";
import product3 from "./images/29.png";
import product4 from "./images/35.png";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";

function Bestselling() {
  const bestSellingItems = [
    {
      id: 1,
      image: product1,
      title: "Fresh Strawberry",
      price: "$17.00"
    },
    {
      id: 2,
      image: product2,
      title: "Fortune Sunflower Oil",
      price: "$10.00"
    },
    {
      id: 3,
      image: product3,
      title: "Fresh Bananas",
      price: "$10.00"
    },
    {
      id: 4,
      image: product4,
      title: "Fresh Mushroom",
      price: "$11.00"
    }
  ];

  return (
    <section className="section shell best-section">
      <div className="section-head">
        <p className="eyebrow">Top Picks</p>
        <h2>Best Selling Essentials</h2>
      </div>
      <div className="best-grid">
        {bestSellingItems.map((item) => (
          <article className="product-tile" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="rating">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </p>
            <p className="price">{item.price}</p>
            <button className="btn btn-solid" type="button">
              Order Now
            </button>
          </article>
        ))}
      </div>

      <div className="deal-banner">
        <div>
          <p className="eyebrow">Limited Time</p>
          <h3>Get 25% Off On Your First Purchase</h3>
          <p>Use code FRESH25 at checkout and enjoy instant savings.</p>
        </div>
        <button className="btn btn-outline" type="button">
          <MdLocalOffer />
          Claim Offer
        </button>
      </div>
    </section>
  );
}

export default Bestselling;
