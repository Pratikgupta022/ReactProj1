import React, { useState } from 'react';
import "./style.css";
const UseState = () => {
    const [MyNum, setMyNum] = useState(0);
  return (
    <>
        <div className="center_div">
            <p>{MyNum}</p>
            <div className="button2" onClick={()=> (MyNum>=0 ? setMyNum(MyNum+1) : setMyNum(0))}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Increment
            </div>
            <div className="button2" onClick={()=> (MyNum>0 ? setMyNum(MyNum-1) :  setMyNum(0) )}>
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

export default UseState