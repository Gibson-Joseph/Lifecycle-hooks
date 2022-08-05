import { useReducer } from "react";

const reducer = (state: any, action: any) => {
  if (action.type === "plus") {
    return state + 1;
  }
  if (action.type === "minus") {
    return state - 1;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>{" "}
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
    </div>
  );
};
export default UseReducer;
