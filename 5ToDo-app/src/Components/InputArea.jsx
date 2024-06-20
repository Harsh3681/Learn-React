import { useState } from "react";


const PutInput = ({HandlingNewItem}) =>{

    const[getName, SetName] = useState();
    const[getDate, SetDate] = useState();

    const forName = (event) =>{
        SetName(event.target.value);
        // console.log(event.target.value);
    }
    const forDate = (event) =>{
        SetDate(event.target.value);
        // console.log(event.target.value);
    }
    
    const setForParent = () =>{
        HandlingNewItem(getName,getDate)
        SetName("");
        SetDate("");
    }

    return(
        <>
        <div className="row g-5 mb-4 align-items-center">
            {/* <form className="row g-5 mb-4 align-items-center"> */}
            <div className="col-12 col-md">
            <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Product Name"
                value={getName}
                onChange={forName}
            />
            </div>
            <div className="col-12 col-md">
            <input
                type="date"
                className="form-control"
                id="exampleFormControlInput2"
                value={getDate}
                onChange={forDate}
            />
            </div>
            <div className="col-12 col-md-auto">
            <button type="submit" className="btn btn-success"  onClick ={setForParent}>      
                Submit
            </button>
            </div>
            {/* </form> */}
        </div>
        </>
    )
}

export default PutInput;