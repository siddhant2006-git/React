function Button() {
  return <button>Click</button>;
}

function ProductItem({ singleproductitem }) {
  return (
    <div>
      <p>{singleproductitem}</p>
      <Button />
    </div>
  );
}

export default ProductItem;