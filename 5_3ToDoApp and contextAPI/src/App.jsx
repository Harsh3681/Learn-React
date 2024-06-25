import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './Components/Container'
import Heading from './Components/Heading'
import PutInput from './Components/InputArea'
import PrintToItem from './Components/PrintToItem'

import { TodoItemsByContext } from './storeForContextAPI/todo_Item_store'
import './App.css'

function App() {


  const [getToData, setToData] = useState([]);  

  const AddNewItem = (itemName, itemDate) =>{

    // const prevData = [...getToData , {name:itemName, DueDate:itemDate}];  // we can use this kind of line when previous value not depends on our current value in our array some values are depends on each other. 
    // setToData(prevData);     // another way to do this both lines is below 

    // below code use for "Update state from Previous State"
// ex. (existingPost) => [...existingPost, postData]

    setToData((currentValue)=>{
      const prevData = [...currentValue , {name:itemName, DueDate:itemDate}];
      return prevData;
    })
  }
  

  const DeleteItem = (MyItemName) =>{
    const newToItemList = getToData.filter(item => item.name !== MyItemName); // logic is that for delete item according "filter" method, as we know once given condition satified by performing some operation it will create new Array and here we say jar find krtoy ti value (ItemName) ani array chi value (item) !== asel tar te not equal wale sarw eka newArray madhe taka and to array set krun dya. 
    setToData(newToItemList);
    // console.log(`Here is ${ItemName}`);
  }
  
  

  return (
    <>
      <TodoItemsByContext.Provider value={{
        TodoData : getToData,
        AddNewItem : AddNewItem,
        DeleteItem : DeleteItem
      }}>
        <Container>
          <Heading />
          <PutInput />   {/* here we remove all the "props" && "AddNewItem" we need to use in this component file  */}
          <PrintToItem />   {/* ##### here we remove all the "props" ##### And we need to use "TodoData" && "DeleteItem" in this component file -->   we use this "TodoItemsByContext" with "PrintToItem"  And */}
        </Container>
      </TodoItemsByContext.Provider>
    </>
  )
}

export default App
