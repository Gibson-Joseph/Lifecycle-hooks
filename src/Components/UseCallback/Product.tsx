import { memo } from "react";

const Product = memo((props: any) => {
  console.log(`${props.name} item component re rendered`);
  const style = {
    border: "1px solid black",
    width: "110px",
    margin: "auto",
  };
  return (
    <>
      <div style={style}>
        <h1>{props.name}</h1>
        <button onClick={props.add}>Add to cart</button>
      </div>
    </>
  );
});
export default Product;
