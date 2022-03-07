export default function product({ product }) {
  return (
    <div>
      <h6>{product.title}</h6>
      <img src={product.image} alt="" />
    </div>
  );
}
