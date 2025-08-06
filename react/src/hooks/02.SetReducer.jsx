import React, { useReducer } from "react";
function reduce(state, action) {
  switch (action.type) {
    case "add":
      return { num: state.num + action.num };
    default:
      break;
  }
}
const SetReducer = () => {
  let [state, dispatch] = useReducer(reduce, { num: 0 });
  return (
    <div>
      <div onClick={() => dispatch({ type: "add", num: 2 })}>加</div>
      <div>{state.num}</div>
    </div>
  );
};

export default SetReducer;
