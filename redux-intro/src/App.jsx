import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./slices/counterSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch(); 
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(0);

  return <div>
    <h1>{count}</h1>
    <button onClick={() => {
      dispatch(increment())
    }}>Increment</button>

    <button onClick={() => {
      dispatch(decrement())
    }}>Decrement</button>

    <br />
    
    <input type="number" value={num} onChange={(e) => {
      setNum(e.target.value)
    }}/>

    <button onClick={() => {
      dispatch(incrementByAmount(Number(num)))
    }}>Increase Amount</button>
  </div>
}
export default App