import lowcast1 from "../../../assets/images/35.png";
import lowcast2 from "../../../assets/images/33.png";
import lowcast3 from "../../../assets/images/12.png";
import lowcast4 from "../../../assets/images/31.png";
import lowcast5 from "../../../assets/images/29.png";
import highcast1 from "../../../assets/images/11.png";
import highcast2 from "../../../assets/images/36.png";
import highcast3 from "../../../assets/images/5.png";
import highcast4 from "../../../assets/images/10.png";
import highcast5 from "../../../assets/images/1.png";
import averagecast1 from "../../../assets/images/3.png";
import averagecast2 from "../../../assets/images/34.png";

const products = [
  {
    id: 1,
    name: "Fresh Mushroom",
    category: "low-cost",
    image: lowcast1,
    price: 11,
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "Fresh Basket Onion",
    category: "low-cost",
    image: lowcast2,
    price: 5,
    rating: 4.6,
    featured: false
  },
  {
    id: 3,
    name: "Fresh Broccoli",
    category: "low-cost",
    image: lowcast3,
    price: 4,
    rating: 4.7,
    featured: false
  },
  {
    id: 4,
    name: "Fresh Brinjal Bharta",
    category: "low-cost",
    image: lowcast4,
    price: 2,
    rating: 4.5,
    featured: false
  },
  {
    id: 5,
    name: "Fresh Bananas",
    category: "low-cost",
    image: lowcast5,
    price: 10,
    rating: 4.9,
    featured: true
  },
  {
    id: 6,
    name: "Fresh Apple Red",
    category: "high-cost",
    image: highcast1,
    price: 20,
    rating: 4.8,
    featured: false
  },
  {
    id: 7,
    name: "Fresh Strawberry",
    category: "high-cost",
    image: highcast2,
    price: 17,
    rating: 4.9,
    featured: true
  },
  {
    id: 8,
    name: "Knorr Instant Soup",
    category: "high-cost",
    image: highcast3,
    price: 3,
    rating: 4.4,
    featured: false
  },
  {
    id: 9,
    name: "Fresh Mango Dasheri",
    category: "high-cost",
    image: highcast4,
    price: 13,
    rating: 4.7,
    featured: false
  },
  {
    id: 10,
    name: "Fortune Sunflower Oil",
    category: "high-cost",
    image: highcast5,
    price: 10,
    rating: 4.8,
    featured: true
  },
  {
    id: 11,
    name: "Basmati Rice",
    category: "average-cost",
    image: averagecast1,
    price: 10,
    rating: 4.6,
    featured: false
  },
  {
    id: 12,
    name: "Fresh Muskmelon",
    category: "average-cost",
    image: averagecast2,
    price: 9,
    rating: 4.5,
    featured: false
  }
];

export default products;
