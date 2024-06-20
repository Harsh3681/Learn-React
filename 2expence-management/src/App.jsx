import { useState,useEffect } from "react";

import { MyProductInput } from "./myExpenceComponents/ProductInput";
import MyProductDelete from "./myExpenceComponents/ProductDelete";
import MyHeading from "./myExpenceComponents/ProjectHeading";
import ShowMyExpenceTable from "./myExpenceComponents/ShowTableButton";
import MyExpenceTable from "./myExpenceComponents/ExpenceTable";

import Container from "./myExpenceComponents/Container";
import "./App.css";

function App() {
  
  const [isTableVisible, setIsTableVisible] = useState(true);

  // localStorage.clear();
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const initialData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      initialData.push({ productName: key, productAmount: value });
    }
    setFormDataList(initialData);
  }, []);


  const getItem = () =>{  
    // e.preventDefault();
    let item = document.getElementById("exampleFormControlInput1").value;
    let amount = document.getElementById("exampleFormControlInput2").value;

    // console.log(`am ${item.value} and ${amount.value}`);
    return { productName: item, productAmount: amount};
  }


  const handleFormSubmitData = (mydata) => {
   
    setFormDataList(
      prevFormDataList => [...prevFormDataList, mydata]   //  here we put previous array data into previous one along with new data i.e "mydata"
    );
    console.log('Received data in App:', mydata);
  };



  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };



  return (
    <>
      <Container >

        <MyHeading />

      </Container>


      <Container>
          <MyProductInput getItem={getItem} handleFormSubmitData={handleFormSubmitData} /> {/* here we try to pass "funct" via props */}

          <MyProductDelete />

          <ShowMyExpenceTable toggleTableVisibility={toggleTableVisibility} isTableVisible={isTableVisible} />

          {
            (isTableVisible) && localStorage.length!==0 && <MyExpenceTable formDataList={formDataList}/>
          }
      </Container>

      

    </>
  );
}

export default App;
