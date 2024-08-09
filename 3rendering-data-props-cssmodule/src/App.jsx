
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import ItemRendring from './RendringComponents/RenderingItem'
import RenderDataAsPerCondition from './RendringComponents/ConditionalRendering'
import FullNameWithProps from "./Props/MyProps";
import List_Rendering from './Props/1List_Rendering'
import ArrayProductRen from './Props/RenderArrayDataWithProps'

function App() {

  let MyItem = ["j1","Pani","pohe","Shira"];

  return (
    <>
      <ItemRendring />

      <hr /> <br/>

      <h1>Am conditional Rendering</h1>

      <RenderDataAsPerCondition />


      {/* Print Full Name with props */}

      <br />

      <FullNameWithProps name={"Jayesh"} sirname={"Sonawane"}/>

      <hr /> <br/>

      {/* Rendering the List */}

      <List_Rendering/>

      <ArrayProductRen ans={MyItem}/>    {/*<-- here we pass "Array" as props to our component as name of prop is "ans" */ }

    </>
  )
}

export default App
