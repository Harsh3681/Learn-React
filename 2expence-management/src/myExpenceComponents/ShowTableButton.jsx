
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShowMyExpenceTable({toggleTableVisibility,isTableVisible}){


    const showError = ()=>{
        if(localStorage.length===0){
            toast.error('Please Insert Item', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        // setName(name === 'Show Table' ? 'Hide Table' : 'Show Table')
        toggleTableVisibility();
    }

    return (
        <>
            <div className="container">
                <div className="row showtable">
                    <button type="submit" className="btn btn-success" onClick={showError} >{isTableVisible ? 'Hide Table' : 'Show Table'}</button> 
                    <ToastContainer/>
                </div>
            </div>
        </>
    )
}

export default ShowMyExpenceTable;

