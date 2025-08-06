//state
// import { useEffect, useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       // setCount(count + 1);
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []);

//   return <div>{count}</div>;
// }

// export default App;

//effect
// import { useEffect, useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, [count]);
//   return <div>{count}</div>;
// }
// export default App;

//reducer
// import { useEffect, useReducer } from "react";
// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return { num: state.num + action.num };
//     default:
//       return state;
//   }
// }
// function App() {
//   const [state, dispatch] = useReducer(reducer, { num: 0 });
//   useEffect(() => {
//     setInterval(() => {
//       dispatch({ type: "add", num: 1 });
//     }, 1000);
//   }, []);
//   return <div>{state.num}</div>;
// }
// export default App;

//ref
import { useEffect, useState, useRef } from "react";
function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  const ref = useRef(updateCount);
  ref.current = updateCount;
  useEffect(() => {
    const timer = setInterval(() => ref.current(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{count}</div>;
}
export default App;
