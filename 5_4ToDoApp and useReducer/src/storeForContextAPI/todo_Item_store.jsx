import {createContext } from "react";
import { useReducer } from 'react'

// export const TodoItemsByContext = createContext([]); //<--- we can declered it like this also or as below 👇

export const TodoItemsByContext = createContext({
    TodoData : [], // becz it "TodoData" is "Array"
    AddNewItem : () => {},  // becz "AddNewItem" is one method hence pass "empty" method same below 👇
    DeleteItem : () => {},
  });     // "TodoItems" we use at multiple place as component hence decleraed it in Camel case


// ##### Now we create here our own <MyTodoItemsContextProvider /> Component which we render in App.jsx file.
// Then don't need to render Context Store by dot (.Provider) like --> <TodoItemsByContext.Provider />

// Pure fuction "hence write outside Application" needed for "useReducer" 😂  👇
const toDoItemReducer = (currStateTodoItem, action) =>{ // it take "action" obj as "input" and return "Curr state" ### On bases of "type of Action" getting by creating "if else" we return "Curr state"

  let newToItems = currStateTodoItem;

  if(action.type === "NEW_ITEM"){

    newToItems = [...currStateTodoItem , {name: action.payload.itemName, DueDate: action.payload.itemDate}]; // [] <--bracket becz our initial state is "Empty Array"
    
  }else if(action.type === "DELETE_ITEM"){
    newToItems = currStateTodoItem.filter(item => item.name !== action.payload.itemName);
  }
  return newToItems;
}

// below 👇

const MyTodoItemsContextProvider = ({children}) =>{

  // syntax of "useReducer"
// const [state, dispatch] = useReducer(reducer, initialState)

const [getToDoData, dispatchToDOData] = useReducer(toDoItemReducer, []);

// const [getToData, setToData] = useState([]);   //<--- Above is same like this use state

  const AddNewItem = (itemName, itemDate) =>{

    // we will crate "Obj" of Action
    const newItemAction = {       // and "newItemAction" is our "action" obj for oue above "toDoItemReducer" funct
      type : "NEW_ITEM",  // it can be anything "in capital letter"
      payload : {
        itemName : itemName,
        itemDate : itemDate
      }
    };
    dispatchToDOData(newItemAction);
  }
  

  const DeleteItem = (MyItemName) =>{
    
    const DeleteItemAction = {       // and "DeleteItemAction" is our "action" obj for oue above "toDoItemReducer" funct
      type : "DELETE_ITEM",  // it can be anything "in capital letter"
      payload : {
        itemName : MyItemName,
      }
    };
    dispatchToDOData(DeleteItemAction);
  }
  
  return(
    <>
      <TodoItemsByContext.Provider value={{
        TodoData : getToDoData, // here "getToDoData" is from --> const [getToDoData, dispatchToDOData] = useReducer(toDoItemReducer, []);
        AddNewItem : AddNewItem,
        DeleteItem : DeleteItem
      }}>
      {children}    {/* Here we render our children i.e form App.jsx file ele present in <MyTodoItemsContextProvider /> Component*/}
      </TodoItemsByContext.Provider>

    </>
  )
}

export default MyTodoItemsContextProvider;





