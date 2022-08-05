import { useState, memo, useCallback } from "react";
import Product from "./Product";
const UseCallback = () => {
  const [item, setItem] = useState(["item 1", "item 2"]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const addCart = useCallback(() => {
    console.log(cart);

    return setCart(cart + 1);
  }, [cart]);

  return (
    <div>
      <h3>count:{count}</h3>
      <button onClick={() => handleClick()}>count +</button>
      <h3>cart:{cart}</h3>
      {item.map((val, index) => {
        return <Product name={val} key={index} add={addCart} />;
      })}
    </div>
  );
};
export default UseCallback;
