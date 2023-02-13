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
    const[isEditItem , setIsEditItem] = useState("");
    const[toggleButton,setToggleButton] = useState(false);

    const addItem = () =>{
        if(!inputData){
            alert("please enter some data in input field");
        }else if(inputData && toggleButton){
            console.log(items);
            setItems(
                items.map((curElem) => {
                    if(curElem.id === isEditItem){
                        return {...curElem,name:inputData};
                    }
                    return curElem;
                })
            );
            setInputData("");
            setIsEditItem(null);
            setToggleButton(false);
        }else{
            const myInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items,myInputData]);
            setInputData("");
        }
    };
    // console.log(items);

    const editItem = (id) =>{
        const todo_edited_item = items.find((curElem) => {
            return curElem.id === id;
        });
        setInputData(todo_edited_item.name);
        setIsEditItem(id);
        setToggleButton(true);
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
                    {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>) : (<i className="fa fa-plus add-btn" onClick={addItem}></i>)}
                    {/* <i className="fa fa-plus add-btn" onClick={addItem}></i> */}
                </div>
                {/* Show our items */}
                <div className="showItems">
                    {items.map((curElement,index) => {
                        return (
                        <div className="eachItem" key={curElement.id}>
                        <h3>{curElement.name}</h3>
                        <div className="todo-btn">
                        <i className="far fa-edit add-btn" onClick={()=>editItem(curElement.id)}></i>
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