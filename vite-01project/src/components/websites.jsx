import Productitem from "./product/product-item";

const dummyproduct = ["product1", "product2", "product3"];

function productlist({name , city, listproduct}) {
  return (
    <div>
      <h2>ecommerce product </h2>
      {/* <Productitem /> */}
      <h3>user {name} user city name {city}</h3>
      <ul>
        {listproduct.map((item, index) =>(
          <productlist singleproductitem={item} key={index} />
      
        ))
          
        }
    </ul>
    </div>
  );
}
export default productlist;
