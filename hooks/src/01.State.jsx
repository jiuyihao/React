import React, { useState } from 'react'

const App = () => {
  const [num,setNum]=useState(0)
  return (
    <div>
      {/* <div onClick={()=>setNum((prev=>prev+1))}> */}
       <div onClick={()=>setNum((num+1))}>
        {num}  
      </div>
    </div>
  )
}

export default App