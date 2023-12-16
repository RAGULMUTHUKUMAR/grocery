import { useState } from "react";
import Data from "./data";

function Product() {
  const [product, setProduct] = useState(Data);

  function handleChange(category) {
    if (category === "ALL GROCERYS") {
      setProduct(Data);
    } else {
      const filtered = Data.filter((i) => i.category === category);
      setProduct(filtered);
    }
  }

  const filteredCategories = [
    "ALL GROCERYS",
    "LOW CAST GROCERYS",
    "HIGH CAST GROCERYS",
    "AVERAGE CAST GROCERYS",
  ];

  return (
    <div>
      <h1 className="font-bold text-4xl text-red-400 text-center p-5 mt-5 ">
        SHOPPING NOW
      </h1>
      <p className="text-green-300 text-center">Ready To Go...!</p>
      <div>
        <div className="flex justify-around items-center mt-10 p-10">
          {filteredCategories.map((category) => (
            <button
              className="hover:bg-green-300 font-bold text-red-400 shadow-black shadow-2xl p-3 cursor-pointer"
              onClick={() => handleChange(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 place-items-center place-content-center gap-[50px] mt-10">
          {product.map((item) => (
            <div
              className="shadow-black shadow-2xl w-[300px] h-[300px] rounded-2xl flex flex-col justify-center gap-3 items-center"
              key={item.id}
            >
              <img
                className="w-[150px] h-[150px]"
                src={item.Image}
                alt="images"
              />
              <h1 className="font-medium">{item.fname}</h1>
              <p>{item.price}</p>
              <button className="hover:bg-sky-700 bg-red-400 text-green-300 w-[130px] h-[40px] text-center rounded-lg">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
