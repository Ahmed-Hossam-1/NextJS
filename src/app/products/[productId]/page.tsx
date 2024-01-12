const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const id = params.productId;
  return <div>product number: {id}</div>;
};

export default ProductDetails;
