import ProductItem from "./product/product-item";

const dummyproduct = ["product1", "product2", "product3"];

function ProductList({ name, city }) {
  return (
    <div>
      <h2>Ecommerce product</h2>
      <h3>User {name} | City {city}</h3>

      <ul>
        {dummyproduct.map((item, index) => (
          <ProductItem
            singleproductitem={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;