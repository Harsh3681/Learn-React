import Container from './Components/Container'
import Heading from './Components/Heading'
import PutInput from './Components/InputArea'
import PrintToItem from './Components/PrintToItem'

import MyTodoItemsContextProvider, { TodoItemsByContext } from './storeForContextAPI/todo_Item_store'
import './App.css'


function App() {

  return (
      <MyTodoItemsContextProvider>
        <Container>
          <Heading />
          <PutInput /> 
          <PrintToItem /> 
        </Container>
      </MyTodoItemsContextProvider>
     
  )
}

export default App
