// import React, { useEffect, useState } from 'react'

// function fetchData() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(2);
//     }, 1000); // 添加延迟，模拟异步操作
//   });
// }
// const SetEffect = () => {
//     const [num,setNum]=useState(0)
//     useEffect(()=>{
//         fetchData().then((res)=>setNum(res))
//     },[])
//   return (
//     <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
//   )
// }

// export default SetEffect

import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('effect')
    const timer = setInterval(() => {
      console.log(num);
    }, 1000);

    return () => {
      console.log('clean up')
      clearInterval(timer);
    }
  }, [num]);

  return (
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
  );
}

export default App;