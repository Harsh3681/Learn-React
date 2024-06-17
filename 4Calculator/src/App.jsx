import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalButton from './Components/MyButton'
import UserInput from './Components/MyInputSection'
import Container from './Components/MyContainer'

function App() {

  const [inputValue, setInputValue] = useState('0'); 

    const getButtonClick = (meButton) => {
    if (meButton === '0' && inputValue === '0') {
      return;
    }
    else if(meButton ==='AC'){
      setInputValue('0');
    }
    else if(meButton ==='DEL'){
      setInputValue(inputValue.substring(0,inputValue.length-1))
    }
    else if(meButton === '='){
      setInputValue(eval(inputValue));
    }
    else{
      const newInputValue = inputValue === '0' ? meButton : (inputValue + meButton);
      setInputValue(newInputValue);
    }
  };
 
  return (
    <>
        <Container>
          <UserInput inputValue={inputValue}/>
          <CalButton getButtonClick={getButtonClick} />
        </Container>
      
    </>
  )
}

export default App
