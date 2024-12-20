import React, { useState } from 'react'
import Button from './Button'

function Counter() {
  let [count, setCount] = useState(0);
  const increament = () => {
    setCount(count++);
  }
  const decreament = () => {
    setCount(count--);
  }
  const reset = () => {
    count=0;
    setCount(count);
  }

  return (
    <div>
        <h1>Counter Application</h1>
        <h4>Count: {count}</h4>
        <Button onClick={increament} value="+" style={{color:'white', backgroundColor: 'green'}}/>
        <Button onClick={reset} value="=" style={{color:'black', backgroundColor: 'yellow'}}/>
        <Button onClick={decreament} value="-" style={{color:'white', backgroundColor: 'red'}}/>
    </div>
  )
}

export default Counter