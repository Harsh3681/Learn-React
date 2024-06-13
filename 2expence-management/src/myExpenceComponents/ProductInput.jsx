



function MyProductInput() {
  return (
    <>
    <div className="container">
      
      <div className="mb-3 row text-align-center justify-content-center">

        <div className="col-5">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product Name" />
        </div>
        <div className="col-5">
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Product Amount" />
        </div>
        <div className="col-2 ">
          <button type="submit" className="btn btn-primary">
              Submit
          </button>
        </div>
        
        {/* <MyCustomButtom/> */}

      </div>
      
    </div>
    </>
  );
}

export default MyProductInput;
