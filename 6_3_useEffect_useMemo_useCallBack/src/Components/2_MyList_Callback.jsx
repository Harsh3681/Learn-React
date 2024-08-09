import React, { useEffect, useState } from 'react'

const MyList = ({increment})=> {
    const[item, setItem]  = useState([]);   // required Array

    useEffect(()=>{
        setItem(increment()) // here increment() is funct when we call it, it return an "Array" 
        console.log("Item Updated")
    },[increment])

  return(
    <>
        {item.map((i)=> <h1 key={i}>{i}</h1>)}
    </>
  )
  

}
export default MyList;