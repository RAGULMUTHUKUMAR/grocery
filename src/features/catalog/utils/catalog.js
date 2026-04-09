import { CATEGORY_ALL } from "../constants/catalog";

export function filterProductsByCategory(products, categoryKey) {
  if (categoryKey === CATEGORY_ALL) {
    return products;
  }

  return products.filter((product) => product.category === categoryKey);
}

export function createQuantityMap(products) {
  return products.reduce((accumulator, product) => {
    accumulator[product.id] = 0;
    return accumulator;
  }, {});
}
