import React, { useState , useEffect} from 'react';
import "./style.css";

const UseEffect = () => {
    const [MyNum, setMyNum] = useState(0);
    useEffect(() =>{
      document.title = `chats(${MyNum})`
    });

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
        </div>
    </>
  )
}

export default UseEffect