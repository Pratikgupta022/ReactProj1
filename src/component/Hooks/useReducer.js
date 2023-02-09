import React, { useReducer } from 'react';
import "./style.css";

const reducer = (state,action) =>{
    if(action.type === "INCR"){
        state +=1;
    }else if(state > 0 && action.type === 'DECR'){
        state -=1;
    }
    return state;
};
const UseReducer = () => {
    // const [MyNum, setMyNum] = useState(0);
    const initialData = 10;
    const [state,dispatch] = useReducer(reducer,initialData);

  return (
    <>
                <div className="center_div">
            <p>{state}</p>
            <div className="button2" onClick={()=> dispatch({ type: 'INCR'})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Increment
            </div>
            <div className="button2" onClick={()=> dispatch({ type : "DECR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Decrement
            </div>
        </div>

    </>
  )
}

export default UseReducer