function Button() {
  return (<button>
    click
  </button>)
}

function Product1({ singleproductitem }, ) {
  return (<div >

    <p>{singleproductitem}</p>
    <Button/>
  </div>)
}
export default Product1
