import React, { useState , useEffect} from 'react';
import "./style.css";
const Todo = () => {
    const[inputData,setInputData] = useState("");

    const getLocalData = () =>{
        const lists = localStorage.getItem("myTodoList");
        if(lists){
            return JSON.parse(lists);
        }else{
            return [];
        }
    }

    const[items,setItems] = useState(getLocalData);

    const addItem = () =>{
        if(!inputData){
            alert("please enter some data in input field");
        }else{
            const myInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items,myInputData]);
            setInputData("");
        }
    };

    const deleteItem = (id) =>{
        const updatedItems = items.filter((curelem) => {
            return curelem.id !== id;
        })
        setItems(updatedItems);
    };

    const removeAll = () =>{
        setItems([]);
    }

    useEffect(() => {
      localStorage.setItem("myTodoList", JSON.stringify(items));
    }, [items]);
    
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todo.svg" alt="todoLogo" />
                    <figcaption>Add your list here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" name="" placeholder='✍ Add Item' id="" value={inputData} 
                    onChange={(event)=>setInputData(event.target.value)} />
                    <i className="fa fa-plus add-btn" onClick={addItem}></i>
                </div>
                {/* Show our items */}
                <div className="showItems">
                    {items.map((curElement,index) => {
                        return (
                        <div className="eachItem" key={curElement.id}>
                        <h3>{curElement.name}</h3>
                        <div className="todo-btn">
                        <i className="far fa-edit add-btn"></i>
                        <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElement.id)}></i>
                        </div>
                    </div> )
                    })}
                </div>

                {/* Remove all checklists */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>CHECK LIST</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo