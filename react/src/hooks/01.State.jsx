import React, { useState } from "react";

const State = () => {
  let [num, setNum] = useState(0);
  return (
    <div>
      <div>
        <div
          onClick={() => {
            setNum(num + 1);
          }}
        >
          {num}
        </div>
        <div
          onClick={() => {
            setNum((num) => num + 1);
          }}
        >
          {num}
        </div>
      </div>
    </div>
  );
};

export default State;
