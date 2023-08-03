import React, { useRef, useState } from 'react'

export default function Counter() {
    let countRef = useRef(0);
    const [state,setState] = useState(0);
function handleClick(){
    // This does not re-render component
    countRef.current = countRef.current+1;
    console.log(countRef.current);
}


function handleClickState(){
    setState(state+1);
}

  return (
    <div >
        <button onClick={handleClick}>You Clicked {countRef.current} times</button>
        <button onClick={handleClickState}>You Clicked {state} times</button>

    </div>
  )
}
