import MyButton from "./Components/TryButton";
import Mygreeding from "./Components/Greeding";
import MyRandomNumber from "./Components/RandomNumber";
import MyButtons from "./Components/BoostrapButtons";


function App() {

  return (
    <center>
      <div>
        <h1>Random Number Generator</h1>
        <MyButton></MyButton>
      </div>

      <span>
        <Mygreeding/>
      </span>

      <pre>
        <MyRandomNumber />
        <MyRandomNumber />
      </pre>
      
      <MyButtons/>

      {/* 2:10 */}

    </center>
  )
}

export default App
