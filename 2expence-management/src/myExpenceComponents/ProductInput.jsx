import { useState } from "react";


export const MyProductInput = ({ getItem, handleFormSubmitData}) => {
  // here MyProductInput is function component

  // here we try to perform 2 way communication by getting "getItem" as props which is funct in "Parent" i.e App.jsx

  const ChangesSang = (e) => {
    // ChangesSang funct for "onChange" event helpful to see what specific changes happened on the "input" field && with "Submit" use it via "onClick" event
    console.log("am", e.target.value);
  };

  // -------------------------------------------------------------------------------


  const handleFormSubmit = (e) => {
    e.preventDefault();
    var told = false;
 
    const formData = getItem(e);    {/* Here "getItem" is funct we get from the "Parent" itself i.e App.js communcation happen betwwenn parent and child */}
    console.log('Form Data:', formData);
    
    if(localStorage.getItem(formData.productName)){
        told=true;
        const previousProductAmount =localStorage.getItem(formData.productName);
        localStorage.setItem(formData.productName, (Number)(previousProductAmount) + (Number)(formData.productAmount));
    }
    else{
        localStorage.setItem(formData.productName, formData.productAmount);
    }
    


    // localStorage.setItem(formData.productName, formData.productAmount);

    handleFormSubmitData(formData);
    window.location.reload();
    // document.getElementById("exampleFormControlInput1").value="";   // this to clear textfield (input) once click submit
    // document.getElementById("exampleFormControlInput2").value="";

  };
  

  return (

    <>
     
      <form className="row g-5 mb-4 align-items-center" onSubmit={handleFormSubmit} >
        <div className="col-12 col-md">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Name"
            onChange={(e) => {
              ChangesSang(e);
            }}
          />
        </div>
        <div className="col-12 col-md">
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Product Amount"
          />
        </div>
        <div className="col-12 col-md-auto">
          <button type="submit" className="btn btn-primary" >      
            Submit
          </button>
        </div>
      </form>

      
    </>
  );
};





