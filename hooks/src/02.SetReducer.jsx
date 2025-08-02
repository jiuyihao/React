import React, { useReducer } from 'react'

function reducer(state,action) {
    switch (action.type) {
        case 'add':
            return {
                num:state.num+action.num
            }
        case 'minus':
            return {
                num:state.num-action.num
            }
    }
    return state
}
const SetReducer = () => {
     const [res, dispatch] = useReducer(reducer, { num: 0});
  return (
    <div>
        <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
        <div onClick={() => dispatch({ type: 'minus', num: 1 })}>减</div>
        <div>{res.num}</div>
    </div>
  );
}

export default SetReducer