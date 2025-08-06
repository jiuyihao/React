// import React, { useEffect, useRef } from 'react'

// const Ref = () => {
//  let ref=useRef()
//  useEffect(()=>{
//  console.log(ref.current)
//  },[])
//   return (
//     <div ref={ref}>Ref</div>
//   )
// }

// export default Ref
import { useRef } from "react";

function App() {
    const numRef = useRef(0);
    return (
        <div>
            <div onClick={() => {
                numRef.current += 1
                console.log(numRef.current)
            }}>{numRef.current}</div>
        </div>
    );
}

export default App;