import products from "../data/products";

function cloneProducts(items) {
  return items.map((item) => ({ ...item }));
}

export async function listProducts() {
  return cloneProducts(products);
}

export async function listFeaturedProducts(limit = 4) {
  return cloneProducts(products.filter((product) => product.featured).slice(0, limit));
}
