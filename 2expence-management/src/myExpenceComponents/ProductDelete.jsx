
import React, { useState, useEffect } from 'react';


function MyProductDelete(){

  const [isDisabled, setIsDisabled] = useState(localStorage.length === 0);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsDisabled(localStorage.length === 0);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    setIsDisabled(localStorage.length === 0);
  }, [localStorage.length]);

  const handleFormSubmit = () => {
      const deleteId = document.querySelector("#exampleFormControlInput3");
      const id = (deleteId.value)-1;
      localStorage.removeItem(localStorage.key((id)));
      window.location.reload();
    }


    return(
        <>

        <form className="row g-5 mb-4 align-items-center" onSubmit={handleFormSubmit}>
        <div className="col-12 col-md-10">
          <input
            type="number"
            className="form-control "
            id="exampleFormControlInput3"
            placeholder="Delete Product Id"
            disabled={isDisabled}
          />
        </div>
        <div className="col-12 col-md-1 ">
          <button type="submit" className="btn btn-danger ps-3">
            Delete
          </button>
        </div>
        </form>
        
        
        </>
    )
}

export default MyProductDelete;






